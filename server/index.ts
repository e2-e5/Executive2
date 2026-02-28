import 'dotenv/config';
import {config as loadEnv} from 'dotenv';
import express from 'express';

type LeadPayload = {
  name?: string;
  contact?: string;
  page?: string;
};

const app = express();
app.use(express.json({limit: '1mb'}));

const PORT = Number(process.env.API_PORT || 8787);

loadEnv({path: '.env.local'});
loadEnv({path: '.env'});

const formatLeadMessage = (params: {name: string; contact: string; page: string}) => {
  const {name, contact, page} = params;
  const formattedTime = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'short',
    timeStyle: 'medium',
    timeZone: 'Europe/Moscow',
  }).format(new Date());

  return [
    'Zayavka s sajta Executive',
    '',
    `Imya: ${name}`,
    `Kontakt: ${contact}`,
    `Stranica: ${page || '-'}`,
    `Vremya (MSK): ${formattedTime}`,
  ].join('\n');
};

const notifyTelegram = async (params: {
  token?: string;
  chatId?: string;
  name: string;
  contact: string;
  page: string;
}) => {
  const {token, chatId, name, contact, page} = params;
  if (!token || !chatId) return;

  const text = formatLeadMessage({name, contact, page});

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
  const {name, contact} = (req.body ?? {}) as LeadPayload;
  const safeName = (name ?? '').trim();
  const safeContact = (contact ?? '').trim();
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
