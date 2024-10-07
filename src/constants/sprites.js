import { v4 as uuid } from 'uuid'
const dogId = uuid()
const dogId1 = uuid()
const dogId2 = uuid()

export const SPRITE_WIDTH = 85;
export const SPRITE_HEIGHT = 85;
export default [
    {
        id: dogId,
        name: "dog",
        position: { x: 0, y: 0 },
        rotation: 0,
        actions: [],
    },
    {
        id: dogId1,
        name: "dog1",
        position: { x: 140, y: 0 },
        rotation: 0,
        actions: [],
    },
    {
        id: dogId2,
        name: "dog2",
        position: { x: 140, y: 0 },
        rotation: 0,
        actions: [],
    }
]