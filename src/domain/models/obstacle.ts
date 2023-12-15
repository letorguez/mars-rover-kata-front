import {Position} from "@/domain/models/position";

export class Obstacle extends Position {
    constructor(latitude: number, longitude: number) {
        super(latitude, longitude);
    }
}