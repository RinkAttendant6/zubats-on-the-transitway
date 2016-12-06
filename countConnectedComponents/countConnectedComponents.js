'use strict';

function traverse(matrix, x, y, value) {
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
 * @param {!number[][]} matrix
 * @returns {number[]}
 */
function countConnectedComponents(matrix) {
    let components = [];

    if (matrix.length === 0) {
        return [];
    }

    for (let x = 0; x < matrix.length; ++x) {
        for (let y = 0; y < matrix[x].length; ++y) {
            if (matrix[x][y] > -1) {
                components.push(traverse(matrix, x, y, matrix[x][y]));
            }
        }
    }
    return components;
};

export default countConnectedComponents;
