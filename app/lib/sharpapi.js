const BASE_URL = 'https://api.sharpapi.io/api/v1';

export async function sharpApiFetch(path, params = {}) {
  const apiKey = process.env.SHARPAPI_KEY;
  const query = new URLSearchParams(params).toString();
  const url = `${BASE_URL}${path}${query ? `?${query}` : ''}`;

  const res = await fetch(url, {
    headers: { 'X-API-Key': apiKey },
    cache: 'no-store',
  });

  const body = await res.json();

  if (!res.ok) {
    const message = body?.error?.message || `SharpAPI request failed (HTTP ${res.status})`;
    throw new Error(message);
  }

  return body;
}

export async function getNflOdds() {
  return sharpApiFetch('/odds', { league: 'NFL' });
}
