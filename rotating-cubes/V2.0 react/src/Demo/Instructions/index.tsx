import React from 'react';

import { Vector3 } from 'three';

const Instructions = (props: {
    setInstructions: Function,
    setCubesAndProperties: Function,
}) => {
    // const [inProgress, setInProgress] = useState(true);
    // useEffect(() => {
    //     let maxTimeToStart = 0;
    //     instructions.forEach((ins) => {
    //         if (ins.timeToStart > maxTimeToStart ) {
    //             maxTimeToStart = ins.timeToStart;
    //         }
    //     })
    //     setTimeout(() => {
    //         setInProgress(false);
    //     }, maxTimeToStart + 2000)
    // }, [])
    // const foo = () => {
    //     const handleClick = () => {
    //         setCubesAndProperties([]);
    //         setInstructions([]);
    //     }
    //     return (
    //         <div>
    //             <button onClick={handleClick}> 
    //                 {inProgress ? "DO NOT CLICK" : "CLICK"}
    //             </button>
    //         </div>
    //     )
    // }

    return (
        <div>
            <h1>
                Instructions here
            </h1>
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
        </div>
    )
}

export default Instructions; 