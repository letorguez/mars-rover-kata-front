import {Planet} from "@/domain/models/planet";
import {MarsRoverDTO} from "@/infraestructure/dto/marsRoverDTO";
import {ObstacleDTO} from "@/infraestructure/dto/obstacleDTO";
import {PlanetSizeDTO} from "@/infraestructure/dto/planetSizeDTO";

export class PlanetDTO {
    constructor(
        private readonly size: PlanetSizeDTO,
        private readonly marsRovers: MarsRoverDTO[],
        private readonly obstacles: ObstacleDTO[]
    ) {
    }

    toDomainObject(): Planet {
        return new Planet(
            this.size.toDomainObject(),
            this.marsRovers.map(marsRover => marsRover.toDomainObject()),
            this.obstacles.map(obstacle => obstacle.toDomainObject())
        );
    }
}