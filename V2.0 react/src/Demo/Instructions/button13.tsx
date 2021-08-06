import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

const BUTTON_TITLE = "Traversal Y axis test";

export const Button13 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
            {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},            
            {id: 3, initialPosition: new Vector3(0, 0, -1), color: "#77410e"},         
            {id: 4, initialPosition: new Vector3(-1, 0, 0), color: "#77410e"},         
            {id: 5, initialPosition: new Vector3(-1, 0, -1), color: "#77410e"},         
            {id: 6, initialPosition: new Vector3(-1, 0, -2), color: "#77410e"},         
            {id: 7, initialPosition: new Vector3(-1, 0, -3), color: "#77410e"},         
            {id: 8, initialPosition: new Vector3(0, 0, -3), color: "#77410e"},         
            {id: 9, initialPosition: new Vector3(1, 0, -3), color: "#77410e"},         
            {id: 10, initialPosition: new Vector3(2, 0, -3), color: "#77410e"},         
            {id: 11, initialPosition: new Vector3(2, 0, -2), color: "#77410e"},         
            {id: 12, initialPosition: new Vector3(2, 0, -1), color: "#77410e"},         
            {id: 13, initialPosition: new Vector3(2, 0, 0), color: "#77410e"},         
               
        ])
        props.setInstructions([
            {
                cubeID: 3,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: 1000,
            },
            {
                cubeID: 3,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: 2000,
            },
            {
                cubeID: 3,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: 3000,
            },
            {
                cubeID: 3,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: 4000,
            },


            {
                cubeID: 3,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: 5000,
            },
            {
                cubeID: 3,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: 6000,
            },
            {
                cubeID: 3,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: 7000,
            },
            {
                cubeID: 3,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: 8000,
            },
        ])
    }}>
        {BUTTON_TITLE}
    </Button>
)
