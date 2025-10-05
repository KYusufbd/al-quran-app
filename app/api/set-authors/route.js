export async function POST(request) {
  const { auths } = await request.json();

  return new Response(
    JSON.stringify({ message: "Authors selection is successfull!" }),
    {
      status: 200,
      headers: { "Set-Cookie": `auths=${JSON.stringify(auths)}; path=/` },
    },
  );
}
