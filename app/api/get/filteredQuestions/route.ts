import connect from "@/utils/mongodb/startMongo";

export async function GET(request: Request, response: Response) {
  const client = await connect;
  const db = client.db("Teste_Admitere");
  const collection = db.collection("questions");

  // Extragem parametrii din query string-ul URL-ului
  const { searchParams } = new URL(
    request.url,
    `http://${request.headers.get("host")}`
  );

  const materie = searchParams.get("materie");
  const capitol = searchParams.get("capitol");
  const dificultate = searchParams.get("dificultate");
  const numarIntrebari = parseInt(
    searchParams.get("numarIntrebari") || "10",
    10
  );

  const query: any = {};
  if (materie) {
    query.subject = capitalizeFirstLetter(materie);
  }
  if (capitol) {
    query.chapter = capitalizeFirstLetter(capitol);
  }
  if (dificultate) {
    query.difficulty = parseInt(dificultate);
  }

  try {
    const questions = await collection
      .find({
        subject: query.subject,
        chapter: query.chapter,
        difficulty: query.difficulty,
      })
      .limit(numarIntrebari)
      .toArray();

    return Response.json({ questions });
  } catch (error) {
    console.error("Eroare în interogarea bazei de date:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

// Funcția pentru a face prima literă a unui string literă mare
function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
