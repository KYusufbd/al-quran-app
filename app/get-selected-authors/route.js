import { cookies } from 'next/headers';

export async function GET(rquest) {
  const cookieStore = await cookies();

  const { value } = cookieStore.get('auths');

  return Response.json(JSON.parse(value));
}
