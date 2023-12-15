import Position from "@/domain/models/position";

export default class Obstacle {
    constructor(private readonly position: Position) {}

    getPosition(): Position {
        return this.position;
    }
}