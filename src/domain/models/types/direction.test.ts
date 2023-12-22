import {isDirection} from "@/domain/models/types/direction";

describe('Direction', () => {
    describe('isDirection', () => {
        it('should return true when the direction is N', () => {
            expect(isDirection('N')).toBeTruthy();
        });

        it('should return true when the direction is S', () => {
            expect(isDirection('S')).toBeTruthy();
        });

        it('should return true when the direction is E', () => {
            expect(isDirection('E')).toBeTruthy();
        });

        it('should return true when the direction is W', () => {
            expect(isDirection('W')).toBeTruthy();
        });

        it('should return false when the direction is not N, S, E or W', () => {
            expect(isDirection('X')).toBeFalsy();
        });
    });
});