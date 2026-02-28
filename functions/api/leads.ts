type Env = {
  GOOGLE_SCRIPT_URL?: string;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
};

type LeadPayload = {
  name?: string;
  phone?: string;
  telegram?: string;
  contact?: string;
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });

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
      headers: {'Content-Type': 'application/json'},
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

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const {GOOGLE_SCRIPT_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID} = context.env;

  if (!GOOGLE_SCRIPT_URL) {
    return json({error: 'google_script_not_configured'}, 500);
  }

  let payload: LeadPayload = {};
  try {
    payload = (await context.request.json()) as LeadPayload;
  } catch (_error) {
    return json({error: 'invalid_json'}, 400);
  }

  const name = (payload.name ?? '').trim();
  const {contact, phone, telegram} = buildContact(payload);
  const page = context.request.headers.get('referer') ?? '';

  if (!name || !contact) {
    return json({error: 'name_and_contact_required'}, 400);
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        contact,
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
      return json({error: errorCode}, response.status);
    }

    if (!data || data.ok !== true) {
      return json({error: 'google_script_invalid_response'}, 502);
    }

    await notifyTelegram({
      token: TELEGRAM_BOT_TOKEN,
      chatId: TELEGRAM_CHAT_ID,
      name,
      contact,
      phone,
      telegram,
      page,
    });

    return json({ok: true});
  } catch (_error) {
    return json({error: 'google_script_request_failed'}, 502);
  }
};
