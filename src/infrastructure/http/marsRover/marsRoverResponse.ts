import MarsRover from "@/domain/models/marsRover";
import Position from "@/domain/models/position";
import {isDirection} from "@/domain/models/types/direction";

interface PositionResponse {
    latitude: number;
    longitude: number;
}

export interface MarsRoverResponse {
    id: string;
    position: PositionResponse;
    direction: string;
}

export function convertToMarsRover(marsRoverResponse: MarsRoverResponse): MarsRover {
    if (!isDirection(marsRoverResponse.direction)) {
        throw new Error('Invalid direction');
    }
    return new MarsRover(
        marsRoverResponse.id,
        marsRoverResponse.position,
        marsRoverResponse.direction
    );
}