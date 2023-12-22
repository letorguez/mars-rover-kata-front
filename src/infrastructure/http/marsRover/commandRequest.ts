import { SendCommand } from '@/domain/models/sendCommand';

export interface CommandRequest extends SendCommand {
    marsRoverId: string;
    command: string;
}
