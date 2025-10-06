export async function POST(request) {
  const { script } = await request.json();

  return new Response(
    JSON.stringify({ message: "Request received for srcipt selection." }),
    {
      status: 200,
      headers: { "Set-Cookie": `script=${JSON.stringify(script)}; path=/` },
    },
  );
}
