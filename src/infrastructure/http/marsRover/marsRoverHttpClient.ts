import MarsRoverRepository from '@/domain/marsRoverRepository';
import AxiosHttpClient from '@/infrastructure/http/axiosHttpClient';
import MarsRover from '@/domain/models/marsRover';
import Planet from '@/domain/models/planet';
import PlanetDTO from '@/infrastructure/http/planetDTO';
import { convertToMarsRover, MarsRoverResponse } from '@/infrastructure/http/marsRover/marsRoverResponse';
import { SendCommand } from '@/domain/models/sendCommand';

export default class MarsRoverHttpClient implements MarsRoverRepository {
    private api: AxiosHttpClient;

    constructor() {
        this.api = new AxiosHttpClient();
    }

    async moveMarsRover(command: SendCommand): Promise<MarsRover> {
        try {
            let response = await this.api.put<MarsRoverResponse, SendCommand>('/planet/mars-rover', command);
            return convertToMarsRover(response);
        } catch (error) {
            throw error;
        }
    }

    async landMarsRover(body: any): Promise<any> {
        // TODO: Define promise type
        return await this.api.post<MarsRover, any>('/planet/mars-rover', body);
    }

    async getPlanetDetails(): Promise<Planet> {
        const planetDTO = await this.api.get<PlanetDTO>('/planet');
        return planetDTO.toDomainObject();
    }

    async startPlanetWith(body: any): Promise<any> {
        // TODO: NOTE - Empty body at the moment
        return await this.api.post('/planet', body);
    }
}
