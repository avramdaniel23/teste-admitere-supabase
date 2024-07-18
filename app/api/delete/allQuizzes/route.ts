import connect from "@/utils/mongodb/startMongo";

export async function DELETE(request: Request) {
  try {
    const client = await connect;
    const result = await client
      .db("Teste_Admitere")
      .collection("quizzes")
      .deleteMany({});
    return new Response(JSON.stringify({ deletedCount: result.deletedCount }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting documents:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete documents" }),
      { status: 500 }
    );
  }
}
