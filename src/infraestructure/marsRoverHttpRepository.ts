// repository
import {MarsRoverRepository} from "@/domain/marsRoverRepository";
import {AxiosHttpClient} from "@/infraestructure/axiosHttpClient";
import {MarsRover} from "@/domain/models/marsRover";
import {MarsRoverDTO} from "@/infraestructure/dto/MarsRoverDTO";
import {Planet} from "@/domain/models/planet";


class MarsRoverHttpRepository implements MarsRoverRepository {
    private api: AxiosHttpClient;

    constructor() {
        this.api = new AxiosHttpClient();
    }

    async moveMarsRover(command: string): Promise<MarsRover> {
        const {latitude, longitude, direction} = await this.api.put('/planet/mars-rover', command);
        return new MarsRoverDTO(latitude, longitude, direction).toDomainObject();
    }

    async landMarsRover(body: any): Promise<any> {
        return await this.api.post('/planet/mars-rover', body);
    }

    async getPlanetDetails(): Promise<Planet> {
        return await this.api.get('/planet');
    }

    async startPlanetWith(body: any): Promise<any> {
        return await this.api.post('/planet', body);
    }
}