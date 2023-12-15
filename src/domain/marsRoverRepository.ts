import {MarsRover} from "@/domain/models/marsRover";

export interface MarsRoverRepository {
    moveMarsRover: (command: string) => Promise<MarsRover>
    landMarsRover: (body: any) => Promise<any>
    getPlanetDetails: () => Promise<any>
    startPlanetWith: (body: any) => Promise<any>
}
