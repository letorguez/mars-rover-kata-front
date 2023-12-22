import MarsRover from '@/domain/models/marsRover';
import MarsRoverHttpClient from '@/infrastructure/http/marsRover/marsRoverHttpClient';
import nock from 'nock';
import Planet from '@/domain/models/planet';

describe('MarsRoverHttpRepository', () => {
    describe('moveMarsRover', () => {
        it('should call the moveMarsRover endpoint and receive the mapped response', async () => {
            const commandRequest = { marsRoverId: 'an-id', command: 'irrelevant' };
            const expectedMarsRover: MarsRover = new MarsRover('an-id', { latitude: 0, longitude: 2 }, 'E');
            const marsRoverHttpClient = new MarsRoverHttpClient();
            const mockApi = nock('http://localhost:8080')
                .put('/planet/mars-rover', commandRequest)
                .reply(200, {
                    id: 'an-id',
                    position: {
                        latitude: 0,
                        longitude: 2,
                    },
                    direction: 'E',
                });

            const marsRover = await marsRoverHttpClient.moveMarsRover(commandRequest);

            expect(marsRover).toEqual(expectedMarsRover);
            mockApi.done();
        });
    });

    describe('getPlanetDetails', () => {
        it('should call the getPlanetDetails endpoint and receive the mapped response', async () => {
            const expectedMarsRover: MarsRover = new MarsRover('an-id', { latitude: 0, longitude: 2 }, 'E');
            const expectedPlanet: Planet = new Planet({ width: 5, height: 5 }, [expectedMarsRover], []);
            const marsRoverHttpClient = new MarsRoverHttpClient();
            const mockApi = nock('http://localhost:8080')
                .get('/planet')
                .reply(200, {
                    size: {
                        width: 5,
                        height: 5,
                    },
                    marsRovers: [
                        {
                            id: 'an-id',
                            position: {
                                latitude: 0,
                                longitude: 2,
                            },
                            direction: 'E',
                        },
                    ],
                    obstacles: [],
                });

            const planet = await marsRoverHttpClient.getPlanetDetails();

            expect(planet).toEqual(expectedPlanet);
            mockApi.done();
        });
    });
});
