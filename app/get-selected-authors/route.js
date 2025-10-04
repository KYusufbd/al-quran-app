import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();

  const { value } = await cookieStore.get('auths');
  const valueArr = JSON.parse(value);

  return new Response(JSON.stringify({ valueArr }));
}
