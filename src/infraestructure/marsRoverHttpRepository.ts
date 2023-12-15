// repository
import {MarsRoverRepository} from "@/domain/marsRoverRepository";
import {AxiosHttpClient} from "@/infraestructure/axiosHttpClient";


class MarsRoverHttpRepository implements MarsRoverRepository {
    private api: AxiosHttpClient;

    constructor() {
        this.api = new AxiosHttpClient();
    }

    async moveMarsRover(body: any): Promise<any> {
        return await this.api.put('/mars-rover', body);
    }

    async landMarsRover(body: any): Promise<any> {
        return await this.api.post('/mars-rover', body);
    }

    async getPlanetDetails(): Promise<any> {
        return await this.api.get('/planet');
    }

    async startPlanetWith(body: any): Promise<any> {
        return await this.api.post('/planet', body);
    }
}