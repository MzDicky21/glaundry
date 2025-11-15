"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class AggregateUtils {
    static async aggregateToAllUser(service, origin, localKey, foreignKey, hasOne, project) {
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
        ]).toArray();
        return data;
    }
    static async aggregateToUserOne(id, service, origin, localKey, foreignKey, hasOne, project) {
        const data = await service.aggregate([
            {
                $match: {
                    _id: new mongodb_1.ObjectId(id)
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
        ]).toArray();
        return data[0];
    }
    static async aggregateToAll(service, origin, localKey, foreignKey, alias, hasOne, project, pipeline) {
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
        ]).toArray();
        return data;
    }
    static async aggregateToOne(id, service, origin, localKey, foreignKey, hasOne, project, pipeline) {
        const data = await service.aggregate([
            {
                $match: {
                    _id: new mongodb_1.ObjectId(id)
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
        ]).toArray();
        return data[0];
    }
}
exports.default = AggregateUtils;
