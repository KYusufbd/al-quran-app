export async function POST(request) {
  const { auths } = await request.json();

  return Response.json(
    { auths },
    {
      status: 200,
      headers: { 'Set-Cookie': `auths=${JSON.stringify(auths)}` },
    }
  );
}
