/**
 * Person model definition with name and age properties 
 */
export interface Person {
    id: number
    name: string
    age: number
}

export type PersonList = Person[]