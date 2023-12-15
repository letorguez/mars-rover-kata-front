import {Position} from "@/domain/models/position";

export class Obstacle {
    constructor(private readonly position: Position) {}

    getPosition(): Position {
        return this.position;
    }
}