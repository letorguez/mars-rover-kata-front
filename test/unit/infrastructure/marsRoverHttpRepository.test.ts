import axios, { AxiosResponse } from 'axios';
import Position from "@/domain/models/position";
import MarsRover from "@/domain/models/marsRover";
import MarsRoverHttpRepository from "@/infrastructure/marsRoverHttpRepository";
import AxiosHttpClient from "@/infrastructure/axiosHttpClient";

jest.mock('@/infrastructure/axiosHttpClient');
const mockedAxiosHttpClient = AxiosHttpClient as jest.MockedClass<typeof AxiosHttpClient>;

describe('MarsRoverHttpRepository', () => {
    let marsRoverHttpRepository: MarsRoverHttpRepository;

    beforeEach(() => {
        jest.clearAllMocks();
        const axiosHttpClientInstance = new AxiosHttpClient();
        mockedAxiosHttpClient.mockReturnValue(axiosHttpClientInstance);

        marsRoverHttpRepository = new MarsRoverHttpRepository();
    });

    describe('moveMarsRover', () => {
        it('should return a MarsRover', async () => {
            const expectedMarsRover: MarsRover = new MarsRover('an-id', new Position(0, 2), 'E');
            const marsRoverDTO = {
                id: 'an-id',
                position: {
                    latitude: 0,
                    longitude: 2
                },
                direction: 'E'
            };
            mockedAxiosHttpClient.prototype.put.mockResolvedValue(marsRoverDTO);

            const marsRover = await marsRoverHttpRepository.moveMarsRover('ff');

            expect(marsRover).toEqual(expectedMarsRover);
        });
    });
});