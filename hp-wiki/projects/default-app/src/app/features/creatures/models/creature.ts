export interface Creature {
    id?: number
    name: string
    description: string
}

export type CreatureList = Creature[]
// const creature: Required<Creature> = {
// }

// creature.id?.toFixed(2)
// if(creature.id) {
//     console.log(creature.id.toFixed(2))
// }