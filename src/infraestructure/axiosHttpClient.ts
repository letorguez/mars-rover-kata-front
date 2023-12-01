import axios, { AxiosInstance } from 'axios';

export class AxiosHttpClient {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:3000/",
            headers: {
                "Content-Type": "application/json ",
            },
        });
    }

    async get(url: string): Promise<any> {
        try {
            const response = await this.api.get(url);
            return response.data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    }

    async post(url: string, body: any): Promise<any> {
        try {
            const response = await this.api.post(url, body);
            return response.data;
        } catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    }
}