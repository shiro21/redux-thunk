// export interface CounterStateProps {
//     value: number
// }

export interface CounterStateProps {
    loading: boolean,
    data: [
        {
            userId: number,
            id: number,
            title: string,
            body: string
        }
    ]
    error: string | null
}

export interface FakeDataProps {
    userId: number,
    id: number,
    title: string,
    body: string
}