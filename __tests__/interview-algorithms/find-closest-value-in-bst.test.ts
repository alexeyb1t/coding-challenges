import {
  BST,
  findClosestValueInBst,
  findClosestValueInBstIteratively
} from "../../src/interview-algorithms/find-closest-value-in-bst";

describe('Find closest value in BST', () => {
  const tree = new BST(10);
  tree.left = new BST(5);
  tree.right = new BST(15);
  tree.left.left = new BST(2);
  tree.left.right = new BST(5);
  tree.right.left = new BST(13);
  tree.right.right = new BST(22);
  tree.left.left.left = new BST(1);
  tree.right.left.left = new BST(14);

  describe('Recursive', () => {
    it('should return the closest value', () => {
      const target = 12;
      const expectedValue = 13;

      expect(findClosestValueInBst(tree, target)).toEqual(expectedValue);
    });
  });

  describe('Iterative', () => {
    it('should return the closest value', () => {
      const target = 12;
      const expectedValue = 13;

      expect(findClosestValueInBstIteratively(tree, target)).toEqual(expectedValue);
    })
  });
});
