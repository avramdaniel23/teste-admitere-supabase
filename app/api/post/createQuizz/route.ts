import connect from "@/utils/mongodb/startMongo";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  const client = await connect;
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    const requestData = await request.json();

    const points =
      parseInt(requestData.config.dificultate, 10) *
      parseInt(requestData.config.numarIntrebari, 10);
    const documentToInsert = {
      chapter: requestData.config.capitol || "",
      difficulty: parseInt(requestData.config.dificultate, 10) || 0,
      name: requestData.config.name || "",
      points: points || 0,
      privacy: requestData.config.privacy,
      questions: requestData.questionsIDS || [],
      subject: requestData.config.materie || "",
      user_id: user?.id || "",
    };

    const cursor = await client
      .db("Teste_Admitere")
      .collection("quizzes")
      .insertOne(documentToInsert);

    return new Response(
      JSON.stringify({ message: "Successfully updated the document" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting document:", error);
    return new Response(
      JSON.stringify({ message: "Failed to update the document" }),
      { status: 500 }
    );
  }
}
