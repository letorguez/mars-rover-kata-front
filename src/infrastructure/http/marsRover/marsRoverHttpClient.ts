import MarsRoverClient from '@/domain/marsRoverClient';
import AxiosHttpClient from '@/infrastructure/http/axiosHttpClient';
import MarsRover from '@/domain/models/marsRover';
import Planet from '@/domain/models/planet';
import { convertToMarsRover, MarsRoverResponse } from '@/infrastructure/http/marsRover/responses/marsRoverResponse';
import { SendCommand } from '@/domain/models/sendCommand';
import { convertToPlanet, PlanetResponse } from '@/infrastructure/http/marsRover/responses/planetResponse';

export default class MarsRoverHttpClient implements MarsRoverClient {
    private api: AxiosHttpClient;

    constructor() {
        this.api = new AxiosHttpClient();
    }

    async moveMarsRover(command: SendCommand): Promise<MarsRover> {
        try {
            const response = await this.api.put<MarsRoverResponse, SendCommand>('/planet/mars-rover', command);
            return convertToMarsRover(response);
        } catch (error) {
            console.error('Error at moveMarsRover:', error);
            throw error;
        }
    }

    async getPlanetDetails(): Promise<Planet> {
        try {
            const response = await this.api.get<PlanetResponse>('/planet');
            return convertToPlanet(response);
        } catch (error) {
            console.error('Error at getPlanetDetails:', error);
            throw error;
        }
    }

    async landMarsRover(body: any): Promise<any> {
        // TODO: Define promise type
        return await this.api.post<MarsRover, any>('/planet/mars-rover', body);
    }

    async startPlanetWith(body: any): Promise<any> {
        // TODO: NOTE - Empty body at the moment
        return await this.api.post('/planet', body);
    }
}
