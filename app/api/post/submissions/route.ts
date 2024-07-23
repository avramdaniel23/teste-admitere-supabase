import connect from "@/utils/mongodb/startMongo";

export async function POST(request: Request) {
    const client = await connect;
    const requestData = await request.json();

    const cursor = await client
        .db("Teste_Admitere")
        .collection("submissions")
        .insertOne(requestData);

    return new Response(JSON.stringify({ message: "successfully updated the document" }), {
        headers: { 'Content-Type': 'application/json' },
    });
}  