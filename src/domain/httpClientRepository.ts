export interface HttpClientRepository {
    moveRover: (body: any) => Promise<any>
    startMap: (body: any) => Promise<any>
    getMap: () => Promise<any>
}


