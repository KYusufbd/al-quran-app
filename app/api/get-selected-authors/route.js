import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  const auths = cookieStore.get("auths");
  const valueArr = auths?.value && (await JSON.parse(auths.value));

  if (valueArr) {
    return Response.json(valueArr);
  } else {
    console.log("Cookie not found!");
    return Response.json({ message: "Previously selected authors not found!" });
  }
}
