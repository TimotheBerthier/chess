import {areSameColorTiles} from "./helper";
const each = require('jest-each').default;

describe('Helper functions', () => {
    const testCases = [
        [{x: 4, y: 4}, {x: 5, y: 5}],
        [{x: 4, y: 7}, {x: 2, y: 3}]
    ];

    each(testCases).it('areSameColorTiles', (tile1, tile2) => {
        expect(areSameColorTiles(tile1, tile2)).toBeTruthy();
    });
});