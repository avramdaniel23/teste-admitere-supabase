import connect from "@/utils/mongodb/startMongo";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
  // Parse the URL to get query parameters
  const url = new URL(request.url);
  const quizId = url.searchParams.get("quizID"); // Assuming the ID is passed as a query parameter

  if (!quizId) {
    return new Response("Quiz ID is required", { status: 400 });
  }

  try {
    const client = await connect;
    const db = client.db("Teste_Admitere");
    const collection = db.collection("quizzes");

    // Find the quiz by ID
    const quiz = await collection.findOne({ _id: new ObjectId(quizId) });

    if (!quiz) {
      return new Response("Quiz not found", { status: 404 });
    }

    return new Response(JSON.stringify(quiz), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching quiz:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// 66865aa071439eaa154fd304
