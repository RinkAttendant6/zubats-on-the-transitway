'use strict';

const traverse = (matrix : any[][], x : number, y : number, value : number) : number => {
    if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[x].length || matrix[x][y] !== value) {
        return 0;
    }

    // In-place modification
    matrix[x][y] = -1;

    return 1 +
        traverse(matrix, x + 1, y, value) +
        traverse(matrix, x - 1, y, value) +
        traverse(matrix, x, y + 1, value) +
        traverse(matrix, x, y - 1, value);
};

/**
 * Computes a list of sizes of each connected component
 */
const countConnectedComponents = (matrix : any[][]) : number[] => {
    let components : number[] = [];

    if (matrix.length === 0) {
        return [];
    }

    for (let x : number = 0; x < matrix.length; ++x) {
        for (let y : number = 0; y < matrix[x].length; ++y) {
            if (matrix[x][y] > -1) {
                components.push(traverse(matrix, x, y, matrix[x][y]));
            }
        }
    }

    return components;
};

export default countConnectedComponents;
