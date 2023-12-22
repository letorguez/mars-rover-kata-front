import MarsRover from '@/domain/models/marsRover';
import Planet from '@/domain/models/planet';
import { SendCommand } from '@/domain/models/sendCommand';

export default interface MarsRoverClient {
    moveMarsRover: (command: SendCommand) => Promise<MarsRover>;
    landMarsRover: (body: any) => Promise<any>;
    getPlanetDetails: () => Promise<Planet>;
    startPlanetWith: (body: any) => Promise<any>;
}
