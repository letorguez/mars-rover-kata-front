import MarsRoverRepository from "@/domain/marsRoverRepository";
import AxiosHttpClient from "@/infrastructure/axiosHttpClient";
import MarsRover from "@/domain/models/marsRover";
import MarsRoverDTO from "@/infrastructure/dto/marsRoverDTO";
import Planet from "@/domain/models/planet";
import PlanetDTO from "@/infrastructure/dto/planetDTO";

export default class MarsRoverHttpRepository implements MarsRoverRepository {
    private api: AxiosHttpClient;

    constructor() {
        this.api = new AxiosHttpClient();
    }

    async moveMarsRover(command: string): Promise<MarsRover> {
        try {
            return await this.api.put<MarsRover>('/planet/mars-rover', command);
        } catch (error) {
            console.error('Error in moveMarsRover:', error);
            throw error;
        }
    }

    async landMarsRover(body: any): Promise<any> {
        return await this.api.post<MarsRoverDTO>('/planet/mars-rover', body);
    }

    async getPlanetDetails(): Promise<Planet> {
        const planetDTO = await this.api.get<PlanetDTO>('/planet');
        return planetDTO.toDomainObject();
    }

    async startPlanetWith(body: any): Promise<any> { // NOTE: Empty body at the moment
        return await this.api.post('/planet', body);
    }
}