import 'dotenv/config';
import {config as loadEnv} from 'dotenv';
import express from 'express';

type LeadPayload = {
  name?: string;
  phone?: string;
  telegram?: string;
  contact?: string;
  page?: string;
};

const app = express();
app.use(express.json({limit: '1mb'}));

const PORT = Number(process.env.API_PORT || 8787);

loadEnv({path: '.env.local'});
loadEnv({path: '.env'});

const buildContact = (payload: LeadPayload) => {
  const phone = (payload.phone ?? '').trim();
  const telegram = (payload.telegram ?? '').trim();
  const fallbackContact = (payload.contact ?? '').trim();
  const contactParts = [
    phone ? `phone: ${phone}` : '',
    telegram ? `telegram: ${telegram}` : '',
    !phone && !telegram ? fallbackContact : '',
  ].filter(Boolean);

  return {
    phone,
    telegram,
    contact: contactParts.join(' | '),
  };
};

const formatLeadMessage = (params: {
  name: string;
  contact: string;
  phone: string;
  telegram: string;
  page: string;
}) => {
  const {name, contact, phone, telegram, page} = params;
  const formattedTime = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'short',
    timeStyle: 'medium',
    timeZone: 'Europe/Moscow',
  }).format(new Date());

  return [
    'Zayavka s sajta Executive',
    '',
    `Imya: ${name}`,
    phone ? `Telefon: ${phone}` : '',
    telegram ? `Telegram: ${telegram}` : '',
    !phone && !telegram ? `Kontakt: ${contact}` : '',
    `Stranica: ${page || '-'}`,
    `Vremya (MSK): ${formattedTime}`,
  ]
    .filter(Boolean)
    .join('\n');
};

const notifyTelegram = async (params: {
  token?: string;
  chatId?: string;
  name: string;
  contact: string;
  phone: string;
  telegram: string;
  page: string;
}) => {
  const {token, chatId, name, contact, phone, telegram, page} = params;
  if (!token || !chatId) return;

  const text = formatLeadMessage({name, contact, phone, telegram, page});

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    if (!response.ok) {
      console.error('telegram_send_failed');
    }
  } catch (_error) {
    console.error('telegram_request_failed');
  }
};

app.get('/api/health', (_req, res) => {
  res.json({ok: true});
});

app.post('/api/leads', async (req, res) => {
  const payload = (req.body ?? {}) as LeadPayload;
  const {name} = payload;
  const safeName = (name ?? '').trim();
  const {contact: safeContact, phone, telegram} = buildContact(payload);
  const page = req.headers.referer ?? '';

  if (!safeName || !safeContact) {
    return res.status(400).json({error: 'name_and_contact_required'});
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return res.status(500).json({error: 'google_script_not_configured'});
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: safeName,
        contact: safeContact,
        phone,
        telegram,
        page,
      }),
    });

    const contentType = response.headers.get('content-type') || '';
    const rawBody = await response.text();
    const data = contentType.includes('application/json')
      ? JSON.parse(rawBody || '{}')
      : null;

    if (!response.ok) {
      const errorCode = typeof data?.error === 'string' ? data.error : 'google_script_error';
      return res.status(response.status).json({error: errorCode});
    }

    if (!data || data.ok !== true) {
      return res.status(502).json({error: 'google_script_invalid_response'});
    }

    await notifyTelegram({
      token: process.env.TELEGRAM_BOT_TOKEN,
      chatId: process.env.TELEGRAM_CHAT_ID,
      name: safeName,
      contact: safeContact,
      phone,
      telegram,
      page,
    });

    return res.json({ok: true});
  } catch (_error) {
    return res.status(500).json({error: 'google_script_request_failed'});
  }
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
