import {Obstacle} from "@/domain/models/types/obstacle";
import {Position} from "@/domain/models/position";

export class ObstacleDTO {
    constructor(private readonly latitude: number, private readonly longitude: number) {}

    toDomainObject(): Obstacle {
        return new Position(this.latitude, this.longitude);
    }
}