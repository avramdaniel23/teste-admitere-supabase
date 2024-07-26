import connect from "@/utils/mongodb/startMongo";

export async function POST(request: Request) {
  const client = await connect;
  const requestData = await request.json();

  const {
    user_id,
    user_firstName,
    user_lastName,
    subject,
    chapter,
    total_score,
    total_quizzes,
  } = requestData;

  const leaderboardCollection = client
    .db("Teste_Admitere")
    .collection("leaderboard");

  try {
    // Check if user already exists in the leaderboard
    const existingUser = await leaderboardCollection.findOne({ user_id });

    if (existingUser) {
      // Update the existing user's record
      await leaderboardCollection.updateOne(
        { user_id },
        {
          $set: {
            user_firstName,
            user_lastName,
          },
          $inc: {
            total_score,
            total_quizzes,
          },
        }
      );
    } else {
      // Insert a new record for the user
      await leaderboardCollection.insertOne({
        user_id,
        user_firstName,
        user_lastName,
        subject,
        chapter,
        total_score,
        total_quizzes,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Failed to update leaderboard", error);
    return new Response(
      JSON.stringify({ error: "Failed to update leaderboard" }),
      { status: 500 }
    );
  }
}
