import connect from "@/utils/mongodb/startMongo";

export async function GET(request: Request) {
    try {
        const client = await connect;
        const db = client.db("Teste_Admitere");
        const cursor = db.collection("submissions").find();
        const submissions = await cursor.toArray();

        return new Response(JSON.stringify(submissions), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error("Error fetching submissions:", error);
        return new Response("Error fetching submissions", { status: 500 });
    }
}
