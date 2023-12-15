import {MarsRover} from "@/domain/models/marsRover";
import {Planet} from "@/domain/models/planet";

export interface MarsRoverRepository {
    moveMarsRover: (command: string) => Promise<MarsRover>
    landMarsRover: (body: any) => Promise<any>
    getPlanetDetails: () => Promise<Planet>
    startPlanetWith: (body: any) => Promise<any>
}
