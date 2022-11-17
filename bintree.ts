export class BinTree
{
    public root : TreeNode | undefined;

    /**
     *
     */
    constructor() {
        this.root = null;
    }

    protected _insert(tree : TreeNode, value : number): boolean {
        
        if(value < tree.element){
            if(tree.left == undefined) {
                tree.left = new TreeNode(value);
                return tree.left ? true : false;
            }
            return this._insert(tree.left, value);
        } else {
            if(tree.right == undefined) {
                tree.right = new TreeNode(value);
                return tree.right ? true : false;
            }
            return this._insert(tree.right, value);        
        }
            
    }

    public insert(value: number) : boolean {
        if(this.root == undefined){
            this.root = new TreeNode(value);
            return this.root ? true: false;
        }
        return this._insert(this.root, value);
    }

    public search(tree : TreeNode, value: number ) : boolean {
        return false;
    }

    public traverse(tree : TreeNode) {
        if(tree) {
            this.traverse(tree.left);
            console.log(tree.element);
            this.traverse(tree.right);
        }
    }
};

class TreeNode
{
    public left : TreeNode | undefined;
    public right : TreeNode | undefined;
    public element : number;
    /**
     *
     */
    constructor(value: number = 0) {
        this.left = undefined;
        this.right = undefined;
        this.element = value;
    }

}