import {MarsRover} from "@/domain/models/marsRover";
import {Position} from "@/domain/models/position";
import {Direction} from "@/domain/models/types/direction";

export class MarsRoverDTO{
    constructor(private readonly id: string, private readonly latitude: number, private readonly longitude: number, private readonly direction: string) {}

    toDomainObject(): MarsRover {
        return new MarsRover(this.id, new Position(this.latitude, this.longitude), this.direction as Direction);
    }

}
