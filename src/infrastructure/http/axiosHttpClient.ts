import axios, { AxiosInstance } from 'axios';

export default class AxiosHttpClient {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8080',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async get<Response>(url: string): Promise<Response> {
        try {
            const response = await this.api.get<Response>(url);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async post<Response, Request>(url: string, body: Request): Promise<Response> {
        try {
            const response = await this.api.post<Response>(url, body);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async put<Response, Request>(url: string, body: Request): Promise<Response> {
        try {
            const response = await this.api.put<Response>(url, body);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
