import { ObjectId } from "mongodb"
import { getConnectDb } from "../config/db.connect"
import AggregateUtils from "./aggregate"


export default class ServiceUtils {
    static async getAll(collection: string) {
        try {
            const connection = await getConnectDb(collection)
            const data = await connection.find().toArray()
            return data
        } catch (error) {
            throw error
        }
    }

    static async getOne(collection: string, id: string) {
        try {
            const connection = await getConnectDb(collection)
            const data = await connection.findOne({
                _id: new ObjectId(id)
            })
            return data
        } catch (error) {
            throw error
        }
    }

    static async aggregateToAll(
        collection: string,
        origin: string,
        localKey: string,
        foreignKey: string,
        alias: string,
        hasOne: boolean,
        project?: object,
        pipeline?: object[],
    ) {
        try {
            const connection = await getConnectDb(collection)
            const data = await AggregateUtils.aggregateToAll(
                connection,
                origin,
                localKey,
                foreignKey,
                alias,
                hasOne,
                project || [],
                pipeline || []
            )
            return data
        } catch (error) {
            throw error
        }
    }

    static async aggregateToOne(
        collection: string,
        id: string,
        origin: string,
        localKey: string,
        foreignKey: string,
        hasOne: boolean,
        project?: object,
        pipeline?: object[]
    ) {
        try {
            const connection = await getConnectDb(collection)
            const data = await AggregateUtils.aggregateToOne(
                id,
                connection,
                origin,
                localKey,
                foreignKey,
                hasOne,
                project || [],
                pipeline || []
            )
            return data
        } catch (error) {
            throw error
        }
    }

    static async create<T>(collection: string, input: T) {
        try {
            const connection = await getConnectDb(collection)
            const newData = {
                ...input,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            const data = await connection.insertOne(newData)
            const find = await connection.findOne({
                _id: data.insertedId
            })
            return find
        } catch (error) {
            throw error
        }
    }

    static async update<T>(collection: string, id: string, input: Partial<T>) {
        try {
            const connection = await getConnectDb(collection)
            const newData = {
                ...input,
                updatedAt: new Date()
            }
            await connection.updateOne({
                _id: new ObjectId(id)
            }, {
                $set: newData
            })
            const find = await connection.findOne({
                _id: new ObjectId(id)
            })
            return find
        } catch (error) {
            throw error
        }
    }

    static async delete(collection: string, id: string) {
        try {
            const connection = await getConnectDb(collection)
            const data = await connection.deleteOne({
                _id: new ObjectId(id)
            })
        
            return data
        } catch (error) {
            throw error
        }
    }
}