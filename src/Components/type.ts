export interface DataObject {
    isInitial?: boolean
    id: number
    connectionId?: number
    header?: string
    input?: Input
    nextFunction?: string
    isFinal?: boolean
    isNotCard?: boolean
}

export interface Input {
    label: string
    value: string
}

