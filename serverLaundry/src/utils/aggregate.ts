import { ObjectId } from "mongodb"

export default class AggregateUtils {
    static async aggregateToAllUser(
        service: any,
        origin: string,
        localKey: string,
        foreignKey: string,
        hasOne: boolean,
        project?: object,
    ) {
        const data = await service.aggregate([
            {
                $lookup: {
                    from: origin,
                    localField: localKey,
                    foreignField: foreignKey,
                    pipeline: [
                        {
                            $project: {
                                password: 0
                            }
                        }
                    ],
                    as: origin
                }
            },
            {
                $unwind: {
                    path: `$${origin}`,
                    preserveNullAndEmptyArrays: hasOne
                }
            },
            ...(project ? [project] : [])
        ]).toArray()
        return data
    }

    static async aggregateToUserOne(
        id: string,
        service: any,
        origin: string,
        localKey: string,
        foreignKey: string,
        hasOne: boolean,
        project?: object,
    ) {
        const data = await service.aggregate([
            {
                $match: {
                    _id: new ObjectId(id)
                }
            },
            {
                $lookup: {
                    from: origin,
                    localField: localKey,
                    foreignField: foreignKey,
                    pipeline: [
                        {
                            $project: {
                                password: 0
                            }
                        }
                    ],
                    as: origin
                }
            },
            {
                $unwind: {
                    path: `$${origin}`,
                    preserveNullAndEmptyArrays: hasOne
                }
            },
            ...(project ? [project] : [])
        ]).toArray()
        return data[0]
    }

    static async aggregateToAll(
        service: any,
        origin: string,
        localKey: string,
        foreignKey: string,
        alias: string,
        hasOne: boolean,
        project?: object,
        pipeline?: object[],
    ) {
        const data = await service.aggregate([
            {
                $lookup: {
                    from: origin,
                    localField: localKey,
                    foreignField: foreignKey,
                    pipeline: pipeline || [],
                    as: alias
                }
            },
            {
                $unwind: {
                    path: `$${alias}`,
                    preserveNullAndEmptyArrays: hasOne
                }
            },
            ...(project ? [project] : [])
        ]).toArray()
        return data
    }

    static async aggregateToOne(
        id: string,
        service: any,
        origin: string,
        localKey: string,
        foreignKey: string,
        hasOne: boolean,
        project?: object,
        pipeline?: object[]
    ) {
        const data = await service.aggregate([
            {
                $match: {
                    _id: new ObjectId(id)
                }
            },
            {
                $lookup: {
                    from: origin,
                    localField: localKey,
                    foreignField: foreignKey,
                    pipeline: pipeline || [],
                    as: origin
                }
            },
            {
                $unwind: {
                    path: `$${origin}`,
                    preserveNullAndEmptyArrays: hasOne
                }
            },
            ...(project ? [project] : [])
        ]).toArray()
        return data[0]
    }
}