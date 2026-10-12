import { MongoClient } from "mongodb";

export async function GET() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        return Response.json(
            { ok: false, error: "MONGODB_URI missing" },
            { status: 500 }
        );
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        await client.db("bazardor").command({ ping: 1 });

        return Response.json({
            ok: true,
            message: "MongoDB connected successfully",
        });
    } catch (error) {
        return Response.json(
            {
                ok: false,
                error: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}