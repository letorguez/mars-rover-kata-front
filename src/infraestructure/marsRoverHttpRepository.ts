// repository
import {MarsRoverRepository} from "@/domain/marsRoverRepository";
import {AxiosHttpClient} from "@/infraestructure/axiosHttpClient";


class MarsRoverHttpRepository implements MarsRoverRepository {
    private api: AxiosHttpClient;

    constructor() {
        this.api = new AxiosHttpClient();
    }

    async getPlanetDetails(): Promise<any> {
        return await this.api.get('/planet-details');
    }

    async moveRover(body: any): Promise<any> {
        return await this.api.post('/move-rover', body);
    }

    async startPlanetWith(body: any): Promise<any> {
        return await this.api.post('/start-planet', body);
    }
}