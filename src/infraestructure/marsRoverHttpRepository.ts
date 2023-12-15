import {MarsRoverRepository} from "@/domain/marsRoverRepository";
import {AxiosHttpClient} from "@/infraestructure/axiosHttpClient";
import {MarsRover} from "@/domain/models/marsRover";
import {MarsRoverDTO} from "@/infraestructure/dto/marsRoverDTO";
import {Planet} from "@/domain/models/planet";
import {PlanetDTO} from "@/infraestructure/dto/planetDTO";

class MarsRoverHttpRepository implements MarsRoverRepository {
    private api: AxiosHttpClient;

    constructor() {
        this.api = new AxiosHttpClient();
    }

    async moveMarsRover(command: string): Promise<MarsRover> {
        const marsRoverDTO = await this.api.put<MarsRoverDTO>('/planet/mars-rover', command);
        return marsRoverDTO.toDomainObject();
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