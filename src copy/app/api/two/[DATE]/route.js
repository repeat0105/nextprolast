import { loginlikedb } from "../../db";

export async function GET(req, { params }) {
    // console.log(123123123, params)
  const data = await loginlikedb("detailtwo", { DATE: String(params.DATE) });
  return Response.json(data);
}