import {Planet} from "@/domain/models/planet";
import {MarsRoverDTO} from "@/infraestructure/dto/MarsRoverDTO";
import {ObstacleDTO} from "@/infraestructure/dto/ObstacleDTO";

export class PlanetDTO {
    constructor(private readonly size: any, private readonly marsRovers: MarsRoverDTO[], private readonly obstacles: ObstacleDTO[]) {
    }

    toDomainObject(): Planet {
        return new Planet(this.size, this.marsRovers.map(marsRover => marsRover.toDomainObject()), this.obstacles.map(obstacle => obstacle.toDomainObject()));
    }
}