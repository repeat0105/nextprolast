import { loginlikedb } from "./db";

export async function GET(req) {
  const {email} = Object.fromEntries(req.nextUrl.searchParams);

  return Response.json(await loginlikedb('detail',email));
}

export async function POST(req) {
 
  return Response.json(await loginlikedb("post", await req.json()));
}
