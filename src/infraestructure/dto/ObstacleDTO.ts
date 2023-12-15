import {Position} from "@/domain/models/position";
import {Obstacle} from "@/domain/models/obstacle";

export class ObstacleDTO {
    constructor(private readonly latitude: number, private readonly longitude: number) {}

    toDomainObject(): Obstacle {
        return new Obstacle(this.latitude, this.longitude);
    }
}