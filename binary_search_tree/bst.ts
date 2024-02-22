class BinarySearchTree {
  constructor(key: number) {
    this.key = key;
  }
  key: number;

  left?: BinarySearchTree;
  right?: BinarySearchTree;

  insert(key: number, node?: BinarySearchTree): BinarySearchTree {
    if (!node) return new BinarySearchTree(key);

    if (node.key > key) node.left = this.insert(key, node.left);
    else node.right = this.insert(key, node.right);

    return node;
  }

  search(key: number, root?: BinarySearchTree): BinarySearchTree | undefined {
    if (root === undefined || root.key === key) return root;

    if (root.key > key) return this.search(key, root.left);

    return this.search(key, root.right);
  }

  deleteNode(
    key: number,
    root?: BinarySearchTree
  ): BinarySearchTree | undefined {
    if (!root) return root;

    if (root.key > key) {
      root.left = this.deleteNode(key, root.left);
      return root;
    } else if (root.key < key) {
      root.right = this.deleteNode(key, root.right);
      return root;
    }
    if (!root.left) return root.right;
    else if (!root.right) return root.left;
  }
}

function main() {
  const tree = new BinarySearchTree(100);

  tree.insert(90, tree);
  tree.insert(80, tree);
  tree.insert(95, tree);
  tree.insert(60, tree);
  tree.insert(120, tree);
  tree.insert(110, tree);

  console.log("tree", tree);
  const node = tree.search(60, tree.left);
  console.log("node", node);
}

main();
