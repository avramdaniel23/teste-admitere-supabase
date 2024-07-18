import connect from "@/utils/mongodb/startMongo";

export async function GET(request: Request) {
  const client = await connect;
  const leaderboardCollection = client
    .db("Teste_Admitere")
    .collection("leaderboard");
  const leaderboard = await leaderboardCollection.find().toArray();
  return new Response(JSON.stringify(leaderboard), {
    headers: { "Content-Type": "application/json" },
  });
}
