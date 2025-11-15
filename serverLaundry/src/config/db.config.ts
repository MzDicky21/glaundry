import { MongoClient } from "mongodb"

const url = process.env.DB_URL as string
export const dbName = process.env.DB_NAME as string

const client: MongoClient = new MongoClient(url)

export async function connectDb() {
    try {
        await client.connect()
        const db = client.db(dbName)
        return db
    } catch (error) {
        throw error
    }
}




