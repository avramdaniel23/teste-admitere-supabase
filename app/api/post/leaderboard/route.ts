import connect from "@/utils/mongodb/startMongo";

export async function POST(request: Request) {
  const client = await connect;
  const requestData = await request.json();

  const { user_id, score } = requestData;

  // Fetch the current points for the user
  const userInLeaderboard = await client
    .db("Teste_Admitere")
    .collection("leaderboard")
    .findOne({ user_id });

  if (userInLeaderboard) {
    await client
      .db("Teste_Admitere")
      .collection("leaderboard")
      .updateOne({ user_id }, { $inc: { score: score } });
  } else {
    await client
      .db("Teste_Admitere")
      .collection("leaderboard")
      .insertOne(requestData);
  }

  return new Response(
    JSON.stringify({ message: "Successfully updated the leaderboard" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
