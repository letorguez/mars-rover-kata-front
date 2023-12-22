import MarsRover from "@/domain/models/marsRover";
import Obstacle from "@/domain/models/obstacle";
import {PlanetSize} from "@/domain/models/types/planetSize";

export default class Planet {
    private readonly size: PlanetSize;
    private readonly marsRovers: MarsRover[];
    private readonly obstacles: Obstacle[];

    constructor(size: PlanetSize, marsRovers: MarsRover[], obstacles: Obstacle[]) {
        this.size = size;
        this.marsRovers = marsRovers;
        this.obstacles = obstacles;
    }

    getSize(): PlanetSize {
        return this.size;
    }

    getMarsRovers(): MarsRover[] {
        return this.marsRovers;
    }

    getObstacles(): Obstacle[] {
        return this.obstacles;
    }
}