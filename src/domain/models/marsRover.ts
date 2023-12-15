import {Direction} from "@/domain/models/types/direction";
import {Position} from "@/domain/models/position";

export class MarsRover {
    constructor(private readonly position: Position, private readonly direction: Direction) {}

    getPosition(): Position {
        return this.position;
    }

    getDirection(): Direction {
        return this.direction;
    }

    convertToJSON(): String {
        let positionAsJSON = JSON.stringify(this.position);
        let directionAsJSON = JSON.stringify(this.direction);
        return JSON.parse(`{"position": ${positionAsJSON}, "direction": ${directionAsJSON}}`);
    }
}
