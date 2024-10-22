import {areSameColorTiles} from "./helper";

describe('Helper functions', () => {
   it('should return true if tiles are of the same color', () => {
       expect(areSameColorTiles({x:4,y:4},{x:5,y:5})).toBeTruthy();
       expect(areSameColorTiles({x:4,y:7},{x:2,y:3})).toBeTruthy();
   });
});