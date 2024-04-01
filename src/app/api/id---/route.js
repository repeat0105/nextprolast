import { loginlikedb } from "../db";

export async function GET(req, { params }) {
  const data = await loginlikedb("detail", { id: String(params.id) });
  return Response.json(data);
}

export async function DELETE(req, { params }) {

  const data = await loginlikedb("delete", {id: params.id} );
  return Response.json(data);
}

export async function PUT(req) {
  const data = await loginlikedb("put", await req.json());
  return Response.json(data);
}
