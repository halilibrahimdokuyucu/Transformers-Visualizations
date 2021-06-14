import React from 'react';

import { Vector3 } from 'three';

const Instructions = (props: {
    setInstructions: Function,
    setCubesAndProperties: Function,
}) => {

    const button1 = (
        <button onClick={() => {
            props.setCubesAndProperties([
                {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#049101"},
                {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#049101"},            
            ])
            props.setInstructions([
                {
                    cubeID: 1,
                    axis: "z",
                    corner: "NorthWest",
                    displacement: Math.PI/2,
                    timeToStart: 1000,
                },
                {
                    cubeID: 2,
                    axis: "z",
                    corner: "NorthEast",
                    displacement: -Math.PI/2,
                    timeToStart: 1000,
                },
        
                {
                    cubeID: 1,
                    axis: "z",
                    corner: "NorthEast",
                    displacement: Math.PI/2,
                    timeToStart: 2000,
                },
                {
                    cubeID: 2,
                    axis: "z",
                    corner: "NorthWest",
                    displacement: -Math.PI/2,
                    timeToStart: 2000,
                },
        
                {
                    cubeID: 1,
                    axis: "z",
                    corner: "SouthEast",
                    displacement: Math.PI/2,
                    timeToStart: 3000,
                },
                {
                    cubeID: 2,
                    axis: "z",
                    corner: "SouthWest",
                    displacement: -Math.PI/2,
                    timeToStart: 3000,
                },
        
                {
                    cubeID: 1,
                    axis: "z",
                    corner: "SouthWest",
                    displacement: Math.PI/2,
                    timeToStart: 4000,
                },
                {
                    cubeID: 2,
                    axis: "z",
                    corner: "SouthEast",
                    displacement: -Math.PI/2,
                    timeToStart: 4000,
                },
            ])
        }}>
            Walking (in the Z axis)
        </button>
    )

    const button2 = (
        <button onClick={() => {
            props.setCubesAndProperties([
                {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#049101"},
                {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#049101"},            
            ])
            props.setInstructions([
                {
                    cubeID: 1,
                    axis: "z",
                    corner: "NorthWest",
                    displacement: Math.PI/2,
                    timeToStart: 1000,
                },
                {
                    cubeID: 2,
                    axis: "z",
                    corner: "NorthEast",
                    displacement: -Math.PI/2,
                    timeToStart: 1000,
                },
                {
                    cubeID: 1,
                    axis: "z",
                    corner: "NorthWest",
                    displacement: -Math.PI/2,
                    timeToStart: 3000,
                },
                {
                    cubeID: 2,
                    axis: "z",
                    corner: "NorthEast",
                    displacement: Math.PI/2,
                    timeToStart: 3000,
                },
            ])
        }}>
            Pivot back and forth (in the Z axis)
        </button>
    )

    const button3 = (
        <button onClick={() => {
            props.setCubesAndProperties([
                {id: 1, initialPosition: new Vector3(0, 0, 0), color: "#049101"},            
                {id: 2, initialPosition: new Vector3(1, 0, 0), color: "#049101"},
            ])
            props.setInstructions([
                {
                    cubeID: 1,
                    axis: "z",
                    corner: "NorthEast",
                    displacement: -Math.PI/2,
                    timeToStart: 1000,
                },
                {
                    cubeID: 2,
                    axis: "z",
                    corner: "NorthWest",
                    displacement: Math.PI/2,
                    timeToStart: 1000,
                },
                {
                    cubeID: 1,
                    axis: "x",
                    corner: "NorthWest",
                    displacement: -Math.PI/2,
                    timeToStart: 3000,
                },
                {
                    cubeID: 2,
                    axis: "x",
                    corner: "NorthWest",
                    displacement: -Math.PI/2,
                    timeToStart: 3000,
                },
                {
                    cubeID: 1,
                    axis: "y",
                    corner: "SouthEast",
                    displacement: -Math.PI/2,
                    timeToStart: 5000,
                },
                {
                    cubeID: 2,
                    axis: "y",
                    corner: "SouthWest",
                    displacement: Math.PI/2,
                    timeToStart: 5000,
                },
            ])
        }}>
            Pivot multi-axis (away, up, towards)
        </button>
    )


    const button4 = (
        <button onClick={() => {
            props.setCubesAndProperties([
                {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#049101"},
                {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#049101"},            
                {id: 3, initialPosition: new Vector3(0, 1, 0), color: "#049101"},            
            ])
            props.setInstructions([
                {
                    cubeID: 3,
                    axis: "z",
                    corner: "SouthEast",
                    displacement: -Math.PI/2,
                    timeToStart: 1000,
                },
                {
                    cubeID: 3,
                    axis: "z",
                    corner: "SouthEast",
                    displacement: Math.PI/2,
                    timeToStart: 3000,
                },
                {
                    cubeID: 3,
                    axis: "z",
                    corner: "SouthEast",
                    displacement: -Math.PI/2,
                    timeToStart: 5000,
                },
                {
                    cubeID: 3,
                    axis: "z",
                    corner: "SouthEast",
                    displacement: Math.PI/2,
                    timeToStart: 7000,
                },
            ])
        }}>
            Traversal
        </button>
    )

    const button5 = (
        <button onClick={() => {
            props.setCubesAndProperties([
                {id: 1, initialPosition: new Vector3(0, 0, 0), color: "#049101"},
            ])
            props.setInstructions([
            ])
        }}>
            Just 1 cube
        </button>
    )

    const button6 = (
        <button onClick={() => {
            props.setCubesAndProperties([
                {id: 1, initialPosition: new Vector3(0, 0, 0), color: "#049101"},
                {id: 2, initialPosition: new Vector3(1, 0, 0), color: "#049101"},
            ])
            props.setInstructions([
            ])
        }}>
            Just 2 cubes
        </button>
    )

    return (
        <div>
            {button1}
            {button2}
            {button3}
            {button4}
            {button5}
            {button6}

        </div>
    )
}

export default Instructions; 