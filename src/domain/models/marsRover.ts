import {Direction} from "@/domain/models/types/direction";
import Position from "@/domain/models/position";

export default class MarsRover {
    constructor(private readonly id: string, private readonly position: Position, private readonly direction: Direction) {}

    getId(): String {
        return this.id;
    }

    getPosition(): Position {
        return this.position;
    }

    getDirection(): Direction {
        return this.direction;
    }
}
