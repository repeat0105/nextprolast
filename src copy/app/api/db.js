const { MongoClient } = require("mongodb");

const uri = process.env.NEXT_PUBLIC_MONGODBURI;
const client = new MongoClient(uri);

export const loginlikedb = async (type, body) => {
  let data;

  await client.connect();
  let db = client.db("nextpro");
  let collection = db.collection("likedata");

  switch (type) {
    case "post":
      await collection.insertOne(body);
      break;

    case "detail":
      data = await collection.find({ email: body }).toArray();
      break;
    case "detailtwo":
      data = await collection.deleteOne(body);

      break;

    case "delete":
      data = await collection.deleteOne(body);
      break;

    case "put":
      await collection.updateOne(
        { id: body.id },
        { $set: { title: body.title } }
      );
      break;
  }
  if (type != "detail") data = await collection.find().toArray();

  return data;
};
