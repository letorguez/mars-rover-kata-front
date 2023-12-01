import {Direction} from "@/domain/models/direction";
import {Position} from "@/domain/models/position";

export class MarsRover {
    private readonly position: Position;
    private readonly direction: Direction;

    constructor(position: Position, direction: Direction) {
        this.position = position;
        this.direction = direction;
    }

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
