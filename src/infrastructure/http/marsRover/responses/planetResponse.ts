import { convertToMarsRover, MarsRoverResponse } from '@/infrastructure/http/marsRover/responses/marsRoverResponse';
import Planet from '@/domain/models/planet';
import Obstacle from '@/domain/models/obstacle';

interface PlanetSizeResponse {
    width: number;
    height: number;
}

interface ObstacleResponse {
    latitude: number;
    longitude: number;
}

export interface PlanetResponse {
    size: PlanetSizeResponse;
    marsRovers: MarsRoverResponse[];
    obstacles: ObstacleResponse[];
}

export function convertToPlanet(planetResponse: PlanetResponse): Planet {
    return new Planet(
        planetResponse.size,
        planetResponse.marsRovers.map((marsRover) => convertToMarsRover(marsRover)),
        planetResponse.obstacles.map((obstacle) => new Obstacle(obstacle)),
    );
}
