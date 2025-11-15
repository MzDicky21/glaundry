import { ObjectId } from "mongodb";
import { BaseData, BaseInput } from "../../types";

export interface LaundriesData extends BaseData {
    customerId: ObjectId
    jenis: string
    heft: number
    count: number
    price: number
    pickupTime: number
    status: boolean
}

export type LaundriesInput = BaseInput<LaundriesData>