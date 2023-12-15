export interface MarsRoverRepository {
    moveMarsRover: (body: any) => Promise<any>
    landMarsRover: (body: any) => Promise<any>
    getPlanetDetails: () => Promise<any>
    startPlanetWith: (body: any) => Promise<any>
}


