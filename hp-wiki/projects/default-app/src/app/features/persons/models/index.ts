/**
 * Person model definition with name and age properties 
 */
export interface Person {
    id?: number
    name: string
    age: number
}

export const initialValue: Person = {
    age: 13,
    name: ''
}


export type PersonList = Person[]
