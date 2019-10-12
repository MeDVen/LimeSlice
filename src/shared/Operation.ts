import {Category} from "./Category";

type OperationType = "+" | "-"

export interface Operation {
    name: string,
    date: number,
    operationType: OperationType,
    value: number,
    category: Category
}