import {BinTree} from "./bintree";

class Node {
    public hest : Node | undefined;
    public element : number;

}


function testByRef(node : Node){
    if(node == undefined)
        node = new Node();
    node.element = 10;
    // console.log(node.element);
    // node.hest = new Node();
    // node.hest.element = 20;
}

function main() : number {


    console.log("Start");

    var bintree = new BinTree();
    bintree.insert(80);
    bintree.insert(45);
    bintree.insert(5);
    bintree.insert(2);
    bintree.insert(3);
    

    bintree.traverse(bintree.root);

    console.log("Done");

    return 0;
}

main();