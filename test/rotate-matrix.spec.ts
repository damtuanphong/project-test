import { expect } from "chai";
import { rotateClockwise } from "../src/rotate-matrix";

describe("# Rotate Matrix Clockwise Test", () => {
    it("Input matrix is not n*n ", () => {
      const inputMatrix = [
        [1,2,3],
        [5,6]
      ];
      const outputMatrix = rotateClockwise(inputMatrix,1);
      expect(outputMatrix).to.deep.eq([]);
    });
    
    it("No rotation (K <= 0)", () => {
      const inputMatrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      const outputMatrix = rotateClockwise(inputMatrix,0);
      expect(outputMatrix).to.eq(inputMatrix);
    });

    it("Rotate one (K =1) ", () => {
      const inputMatrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      const outputMatrix = rotateClockwise(inputMatrix,1);
      expect(outputMatrix).to.deep.eq([
        [7,4,1],
        [8,5,2],
        [9,6,3]
      ]);
    });
    
    it("Rotate two (K =2) ", () => {
      const inputMatrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      const outputMatrix = rotateClockwise(inputMatrix,2);
      expect(outputMatrix).to.deep.eq([
        [9,8,7],
        [6,5,4],
        [3,2,1]
      ]);
    });

    it("Rotate three (K =3) ", () => {
      const inputMatrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      const outputMatrix = rotateClockwise(inputMatrix,3);
      expect(outputMatrix).to.deep.eq([
        [3,6,9],
        [2,5,8],
        [1,4,7]
      ]);
    });

    it("Rotate four (K = 4) ", () => {
      const inputMatrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      const outputMatrix = rotateClockwise(inputMatrix,4);
      expect(outputMatrix).to.deep.eq([
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]);
    });

});