import getHowManyStopsNeeded from './gossips';
describe('Converter', () => {

    test('should return 3', () => {
        const stops = [
            [2,1,2],
            [5,1,8],
            [5,3,8],
        ]
        expect(getHowManyStopsNeeded(stops)).toBe("never");
    });

    test('should return 5', () => {
        const stops = [
            [3,1,2,3],
            [3,2,3,1],
            [4,2,3,4,5],
        ]
        expect(getHowManyStopsNeeded(stops)).toBe(5);
    });

    test('should return never', () => {
        const stops = [
            [2,1,2],
            [5,2,8],
        ]
        expect(getHowManyStopsNeeded(stops)).toBe("never");
    });

    test('????', () => {
        const stops = [
            [],
            [],
        ]
        expect(getHowManyStopsNeeded(stops)).toBe("???");
    });
});