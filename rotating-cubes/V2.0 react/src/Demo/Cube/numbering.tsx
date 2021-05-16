import React, { useEffect, useRef } from 'react';

import "@react-three/fiber";
import { FontLoader } from 'three';
import Roboto from "./Roboto_Regular.json";
import { axisType } from '../Types/types';

const Numbering = (props: {
    side: number,
    letterOffset: number,
	rAxis: axisType,
}) => {
	
    // Deal with the edge Numbering (using fonts)
	const font = new FontLoader().parse(Roboto);
	const textOptions = {
		font,
		size: 0.1,
		height: 0.01,
	};

	const xEdges = {
		"NorthEast": useRef<THREE.Mesh>(null!),
		"SouthEast": useRef<THREE.Mesh>(null!),
		"SouthWest": useRef<THREE.Mesh>(null!),
		"NorthWest": useRef<THREE.Mesh>(null!),
	};
	useEffect(() => {
		xEdges.NorthEast.current.rotation.y = Math.PI / 2;
		xEdges.SouthEast.current.rotation.y = Math.PI / 2;
		xEdges.SouthWest.current.rotation.y = Math.PI / 2;
		xEdges.NorthWest.current.rotation.y = Math.PI / 2;
	})

	const yEdges = {
		"NorthEast": useRef<THREE.Mesh>(null!),
		"SouthEast": useRef<THREE.Mesh>(null!),
		"SouthWest": useRef<THREE.Mesh>(null!),
		"NorthWest": useRef<THREE.Mesh>(null!),
	};
	useEffect(() => {
		yEdges.NorthEast.current.rotation.x = -Math.PI / 2;
		yEdges.SouthEast.current.rotation.x = -Math.PI / 2;
		yEdges.SouthWest.current.rotation.x = -Math.PI / 2;
		yEdges.NorthWest.current.rotation.x = -Math.PI / 2;
	})

	const fakeNano = {
		"L1": useRef<THREE.Mesh>(null!),
		"L2": useRef<THREE.Mesh>(null!),
		"L3": useRef<THREE.Mesh>(null!),
		"L4": useRef<THREE.Mesh>(null!),
	};
	useEffect(() => {
		fakeNano.L1.current.rotation.z = Math.PI;
		fakeNano.L2.current.rotation.z = Math.PI;
		fakeNano.L3.current.rotation.z = Math.PI;
		fakeNano.L4.current.rotation.z = Math.PI;
	})


	const letterOffset = props.letterOffset;
	const letterHeight = 0.01;
	const half = props.side/2;
	return (
		<>	
			{/* Nano */}
			<group>
				<mesh position={[letterOffset*2.5, letterOffset*3, half]}  ref={fakeNano.L1}>
					<textGeometry args={["|             |", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[letterOffset*2.5, letterOffset, half]} ref={fakeNano.L2}>
					<textGeometry args={["| NANO |", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[letterOffset*2.5, -letterOffset, half]} ref={fakeNano.L3}>
					<textGeometry args={["| ID:       |", textOptions]} /> 
					{/* TODO: fill in the cubeID here ^^^ */}
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[letterOffset*2.5, -letterOffset*3, half]} ref={fakeNano.L4}>
					<textGeometry args={["|             |", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>

			{/* Edges parallel to the "z" axis */}
			<group visible={props.rAxis === "z"}>
				<mesh position={[half-letterOffset, half-letterOffset, 0+half-letterHeight]}>
					<textGeometry args={["0", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[half-letterOffset, -half, 0+half-letterHeight]}>
					<textGeometry args={["1", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, -half, 0+half-letterHeight]}>
					<textGeometry args={["2", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, half - letterOffset, 0+half-letterHeight]}>
					<textGeometry args={["3", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>
			<group visible={props.rAxis === "x"}>
				{/* Edges parallel to the "x" axis */}
				<mesh position={[0+half-letterHeight, half-letterOffset, -half+letterOffset]} ref={xEdges.NorthWest}>
					<textGeometry args={["4", textOptions]}/>
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[0+half-letterHeight, -half, -half+letterOffset]}  ref={xEdges.SouthWest}>
					<textGeometry args={["5", textOptions]}/>
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[0+half-letterHeight, -half, half]}  ref={xEdges.SouthEast}>
					<textGeometry args={["6", textOptions]}/>
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[0+half-letterHeight, half - letterOffset, half]} ref={xEdges.NorthEast}>
					<textGeometry args={["7", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>
			<group visible={props.rAxis === "y"}>
				{/* Edges parallel to the "y" axis */}
				<mesh position={[half-letterOffset, 0+half-letterHeight, -half+letterOffset]} ref={yEdges.NorthEast}>
					<textGeometry args={["8", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[half-2*letterOffset, 0+half-letterHeight, half]} ref={yEdges.SouthEast}>
					<textGeometry args={["9", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, 0+half-letterHeight, half]} ref={yEdges.SouthWest}>
					<textGeometry args={["10", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, 0+half-letterHeight, -half+letterOffset]} ref={yEdges.NorthWest}>
					<textGeometry args={["11", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>
		</>
    )
}

export default Numbering;
