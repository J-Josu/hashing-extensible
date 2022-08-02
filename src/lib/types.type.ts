export interface FieldType {
    key : string
    value : string | number
}

export type RecordType = {
    key: number
    fields : FieldType[]
}

export type BucketType = {
    index: number
    nrr: number
    records: RecordType[]
}

export type BucketListType = BucketType[]

export type TableElementType = {
    hash: string
    dir: number
}

export type HashTableType = {
    order: number
    elements: TableElementType[]
}