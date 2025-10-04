import { cookies } from 'next/headers';

export async function GET(req, res) {
  const cookieStore = await cookies();

  res.setHeader('Access-Control-Allow-Origin', 'https://al-quran-app-blond.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { value } = cookieStore.get('auths');

  return res.json(JSON.parse(value));
}
