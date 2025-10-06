export async function POST(request) {
  const { script } = await request.json();

  return new Response(
    JSON.stringify({ message: "Script selection is successfull!" }),
    {
      status: 200,
      headers: { "Set-Cookie": `script=${JSON.stringify(script)}; path=/` },
    },
  );
}
