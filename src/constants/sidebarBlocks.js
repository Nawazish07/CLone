import React from 'react';
export const motionColor = {
    bgColor: "bg-red-500",
    textColor: "text-black"
}
export const controlColor = {
    bgColor: "bg-blue-500",
    textColor: "text-black"
}

export const MOVE_STEPS = "MoveSteps"
export const TURN_DEGREES = "TurnDegrees"
export const GO_TO = "GoTo"
export const REPEAT = "Repeat"
export default {
    Motion: [
        {
            text: 'Move___ Points',
            type: MOVE_STEPS,
            defaultPayload: { steps: 10 }
        },
        {
            text: 'Rotate ___degrees',
            type: TURN_DEGREES,
            defaultPayload: { degree: -15 }
        },
        {
            text: "Move To x:__ y: __",
            type: GO_TO,
            defaultPayload: { x: 100, y: 100 }
        },
    ],
    Control: [
        {
            type: REPEAT,
            text: "Repeat Animation",
            defaultPayload: {}
        },
    ],
}