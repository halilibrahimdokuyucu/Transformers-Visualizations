import { Vector3 } from "three"

export const Button1 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <button onClick={() => {
        props.setIncrementAmount(0.1);
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
            {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},            
        ])
        props.setInstructions([
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: 1000,
            },
    
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: 3000,
            },
    
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: 5000,
            },
    
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: 7000,
            },
        ])
    }}>
        Walking (in the Z axis)
    </button>
)