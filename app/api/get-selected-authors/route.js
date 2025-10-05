import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();

  const { value } = cookieStore.get('auths');
  const valueArr = JSON.parse(value) || [];

  if (valueArr.length) {
    return Response.json(valueArr, { status: 200 });
  } else {
    return Renponse.json({ message: 'Authors not found!' });
  }
}
