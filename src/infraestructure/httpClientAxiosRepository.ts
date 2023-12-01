// repository
import {HttpClientRepository} from "@/domain/httpClientRepository";
import axios, { AxiosInstance, AxiosResponse } from 'axios';

class HttpClientAxiosRepository implements HttpClientRepository {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:3000/",
            headers: {
                "Content-Type": "application/json"
            },
        });
    }

    async getMap(): Promise<any> {
        try {
            const response = await this.api.get('/map');
            return response.data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    }

    async moveRover(body: any) {
        try {
            const response = await this.api.get('/move');
            return response.data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    }

    async startMap(body: any): Promise<any> {
        try {
            const response = await this.api.get('/start-map');
            return response.data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    }
}