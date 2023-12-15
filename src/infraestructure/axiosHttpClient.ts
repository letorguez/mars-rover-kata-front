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

    async get<T>(url: string): Promise<T> {
        try {
            const response = await this.api.get<T>(url);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async post<T>(url: string, body: string): Promise<T> {
        try {
            const response = await this.api.post<T>(url, body);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async put<T>(url: string, body: string): Promise<T> {
        try {
            const response = await this.api.put<T>(url, body);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}