export const DIRECTIONS = ["N", "S", "E", "W"] as const;

export type Direction = typeof DIRECTIONS[number];

export function isDirection(direction: string): direction is Direction {
    return DIRECTIONS.includes(direction as Direction);
}