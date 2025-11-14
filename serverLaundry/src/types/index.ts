import { ObjectId } from "mongodb";

export interface BaseData {
    _id: ObjectId,
    createdAt: Date
    updatedAt: Date
}

export type BaseInput<T extends BaseData> = Omit<T, "_id" | "createdAt" | "updatedAt">