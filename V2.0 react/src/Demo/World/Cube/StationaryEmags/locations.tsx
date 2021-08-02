import { Euler, Vector3 } from "three"
import { cornerType } from "../../../Util/Types/types";

export type locationsType = {
    repulsionPosition: Vector3,
    hingePosition: Vector3,
    catchingPosition: Vector3,
}

export const getLocations = (cubePosition: Vector3, side: number, offset: number, cornerName: cornerType) : locationsType => {
    const half = side/2;

    const template : locationsType = {
        // This template works for 180 deg, counterclockwise, northwest corner
        repulsionPosition:  new Vector3(-half + -offset     , -half + offset    ,               ),
        hingePosition:      new Vector3(-half + -offset     , half + -offset    ,               ),
        catchingPosition:   new Vector3(-half*3 + offset    , half + -offset    ,               ),
    }

    let adjustment = {
        repulsionPosition: new Vector3(0, 0, 0),
        hingePosition: new Vector3(0, 0, 0),
        catchingPosition: new Vector3(0, 0, 0),
    };
    switch (cornerName) {
        case "NorthEast":
            // CLOCKWISE: generateTemplateCoordList().map(
            //     (v) => v.applyEuler(new Euler(0, -pi/2, 3*pi/2))
            // ),
            const euler = new Euler(0, 0, 0);
            adjustment = {
                repulsionPosition: template.repulsionPosition.applyEuler(euler),
                hingePosition: template.hingePosition.applyEuler(euler),
                catchingPosition: template.catchingPosition.applyEuler(euler),
            }
            break;
        default:
            adjustment = template;
    }

    return adjustment;
}