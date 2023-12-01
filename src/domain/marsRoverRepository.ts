export interface MarsRoverRepository {
    moveRover: (body: any) => Promise<any>
    startPlanetWith: (body: any) => Promise<any>
    getPlanetDetails: () => Promise<any>
}


