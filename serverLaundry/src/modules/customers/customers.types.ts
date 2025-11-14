import { BaseData, BaseInput } from "../../types";

export interface CustomersData extends BaseData {
    name: string
    address: string
    noCall: number
}

export type CustomersInput = BaseInput<CustomersData>