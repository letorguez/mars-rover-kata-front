import Obstacle from "@/domain/models/obstacle";
import Position from "@/domain/models/position";

export default class ObstacleDTO {
    constructor(private readonly latitude: number, private readonly longitude: number) {}

    toDomainObject(): Obstacle {
        return new Obstacle(new Position(this.latitude, this.longitude));
    }
}