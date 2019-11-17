  
class RotateMatrixHandler {

    public rotateClockwise(inputMatrix :number[][], numberOfRotations: number ): number[][] | undefined {  
        //validate input
        if(numberOfRotations <= 0) {
            return inputMatrix;
        }
        //rotate matrix
        numberOfRotations = numberOfRotations % 4;
        let prevMatrix: number[][], matrix : number[][];
        prevMatrix = matrix = inputMatrix;
        while (numberOfRotations !== 0) {
          matrix = [];
          for (let i = 0, column = prevMatrix.length; i < column; i++) {
            for (let j = 0, row = prevMatrix[i].length; j < row; j++) {
              if (column !== row) {
                return [];
              }
              matrix[i] = matrix[i] || [];
              matrix[i][j] = prevMatrix[j][i];
            }
    
            if (numberOfRotations > 0) {
              matrix[i] = matrix[i].reverse();
            }
          }
          numberOfRotations--;
          prevMatrix = matrix;
        }
        return matrix;
    }
}

const handler = new RotateMatrixHandler();
export function rotateClockwise(matrix : number[][], numberOfRotations: number ) {
    return handler.rotateClockwise(matrix, numberOfRotations);
}
