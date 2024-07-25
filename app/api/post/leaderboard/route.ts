import connect from "@/utils/mongodb/startMongo";

export async function POST(request: Request) {
  const client = await connect;
  const requestData = await request.json();

  const { user_id, total_score } = requestData;

  // Fetch the current points for the user
  const userInLeaderboard = await client
    .db("Teste_Admitere")
    .collection("leaderboard")
    .findOne({ user_id });

  if (userInLeaderboard) {
    // Ensure total_score is a number
    const incrementValue = typeof total_score === "number" ? total_score : 0;

    await client
      .db("Teste_Admitere")
      .collection("leaderboard")
      .updateOne(
        { user_id },
        {
          $inc: { total_score: incrementValue, total_quizzes: 1 },
        }
      );
  } else {
    // Initialize total_score and total_quizzes if the user is not in the leaderboard
    const newLeaderboardEntry = {
      ...requestData,
      total_score: typeof total_score === "number" ? total_score : 0,
      total_quizzes: 1,
    };

    await client
      .db("Teste_Admitere")
      .collection("leaderboard")
      .insertOne(newLeaderboardEntry);
  }

  return new Response(
    JSON.stringify({ message: "Successfully updated the leaderboard" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
