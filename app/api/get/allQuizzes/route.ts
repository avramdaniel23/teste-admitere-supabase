import connect from "@/utils/mongodb/startMongo";

export async function GET(request: Request) {
  const client = await connect;
  const cursor = await client.db("Teste_Admitere").collection("quizzes").find();
  const greetings = await cursor.toArray();
  return Response.json(greetings);
}
