import MarsRover from "@/domain/models/marsRover";
import MarsRoverHttpClient from "@/infrastructure/http/marsRover/marsRoverHttpClient";
import nock from "nock";

describe('MarsRoverHttpRepository', () => {

    describe('moveMarsRover', () => {

        it('should call the moveRover endpoint and receive the mapped response', async () => {
            const commandRequest = {marsRoverId: 'an-id', command: 'irrelevant'};
            const marsRoverHttpClient = new MarsRoverHttpClient();
            const mockApi = nock('http://localhost:8080')
                .put('/planet/mars-rover', commandRequest)
                .reply(200, {
                        id: 'an-id',
                        position: {
                            latitude: 0,
                            longitude: 2
                        },
                        direction: 'E'
                    }
                );
            const expectedMarsRover: MarsRover = new MarsRover('an-id', {latitude: 0, longitude: 2}, 'E');

            const marsRover = await marsRoverHttpClient.moveMarsRover(commandRequest);

            expect(marsRover).toEqual(expectedMarsRover);
            mockApi.done();
        });
    });
});