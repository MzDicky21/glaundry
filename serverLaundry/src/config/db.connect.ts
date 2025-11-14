import { connectDb } from "./db.config";

export async function getConnectDb(collection: string) {
    return (await connectDb()).collection(collection)
}