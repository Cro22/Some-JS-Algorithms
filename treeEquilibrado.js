function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype = {
    constructor: BinarySearchTree,
    add: function (value) {
        let node = {
            value: value,
            left: null,
            right: null
        };

        if (this._root === null) {
            this._root = node;
        } else {
            this.insert(node, this._root);
        }
    },
    insert: function (node, current) {
        if (node.value < current.value) {
            if (current.left === null) {
                current.left = node;
            } else {
                this.insert(node, current.left);
            }
        } else if (node.value > current.value) {
            if (current.right === null) {
                current.right = node;
            } else {
                this.insert(node, current.right);
            }
        }
    },
    findValues: function (value, current, parent) {
        if (current === null) {
            return null;
        }

        if (value < current.value) {
            return this.findValues(value, current.left, current);
        } else if (value > current.value) {
            return this.findValues(value, current.right, current);
        } else {
            return {
                current,
                parent
            }
        }
    },
    remove: function (value) {
        let replacement = null,
            replacementParent = null;

        let v = this.findValues(value, this._root, null);

        if (v !== null) {
            let childCount = (v.current.left !== null ? 1 : 0) + (v.current.right !== null ? 1 : 0);
            if (v.current === this._root) {
                switch (childCount) {
                    case 0:
                        this._root = null;
                        break;
                    case 1:
                        this._root = (v.current.right === null ? v.current.left : v.current.right)
                        break;
                    case 2:
                        replacement = this._root.left;

                        while (replacement.right !== null) {
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        if (replacementParent !== null) {
                            replacementParent.right = replacement.left;

                            replacement.right = this._root.right;
                            replacement.left = this._root.left;
                        } else {
                            replacement.right = this._root.right;
                        }

                        this._root = replacement;

                }
            } else {
                switch (childCount) {
                    case 0:
                        if (v.current.value < v.parent.value) {
                            v.parent.left = null;
                        } else {
                            v.parent.right = null;
                        }
                        break;
                    case 1:
                        if (v.current.value < v.parent.value) {
                            v.parent.left = (v.current.left === null ? v.current.right : v.current.left);
                        } else {
                            v.parent.right = (v.current.left === null ? v.current.right : v.current.left);
                        }
                        break;

                    case 2:
                        replacement = v.current.left
                        replacementParent = v.current;

                        while (replacement.right !== null) {
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        replacementParent.right = replacement.left;

                        replacement.right = v.current.right;
                        replacement.left = v.current.left;

                        if (v.current.value < parent.value) {
                            v.parent.left = replacement;
                        } else {
                            v.parent.right = replacement;
                        }
                }
            }
        }
    },
    contains: function (value) {
        return this.findValue(value, this._root);
    },
    findValue: function (value, current) {
        if (current === null) {
            return false;
        }

        if (value < current.value) {
            return this.findValue(value, current.left);
        } else if (value > current.value) {
            return this.findValue(value, current.right);
        } else {
            return true;
        }
    },
    traverse: function (process) {
        function inOrder(node) {
            if (node) {
                if (node.left !== null) {
                    inOrder(node.left);
                }

                process.call(this, node);

                if (node.right !== null) {
                    inOrder(node.right);
                }
            }
        }

        inOrder(this._root);
    },
    size: function () {
        let length = 0;

        this.traverse(function (node) {
            length++;
        });
        return length;
    },
    toArray: function () {
        let result = [];
        this.traverse(function (node) {
            result.push(node.value);
        });
        return result;
    },
    printTree: function () {
        return this._root;
    },
    toString: function () {
        return this.toArray().toString();
    },
};
const tree = new BinarySearchTree();