import Planet from "@/domain/models/planet";
import MarsRoverDTO from "@/infrastructure/http/marsRoverDTO";
import ObstacleDTO from "@/infrastructure/http/obstacleDTO";
import PlanetSizeDTO from "@/infrastructure/http/planetSizeDTO";

export default class PlanetDTO {
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