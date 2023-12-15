import {MarsRover} from "@/domain/models/marsRover";
import {Obstacle} from "@/domain/models/types/obstacle";
import {PlanetSize} from "@/domain/models/types/planetSize";

export class Planet {
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

    convertToJSON(): String {
        let sizeAsJSON = JSON.stringify(this.size);
        let marsRoversAsJSON = JSON.stringify(this.marsRovers);
        let obstaclesAsJSON = JSON.stringify(this.obstacles);
        return JSON.parse(`{"size": ${sizeAsJSON}, "marsRovers": ${marsRoversAsJSON}, "obstacles": ${obstaclesAsJSON}}`);
    }
}