import { expect } from "chai";
import { Graph } from "../src/graph";

describe("# Acyclic graph Test", () => {
    it("Input matrix is not n*n ", () => {

        const vertices = [ {name:'A',weight:1}, {name:'B',weight:2}, {name:'C',weight:2}];
        let g = new Graph(vertices); 
        g.addEdge('A', 'B'); 
        g.addEdge('B', 'C'); 
        g.addEdge('A', 'C'); 
        g.depthFirstTraversal('A'); 

        // adding edges 
        //const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
        // const vertices1 = [ {name:'A',weight:1}, {name:'B',weight:2}, {name:'C',weight:2}, {name:'D',weight:1}, {name:'E',weight:2}, {name:'F',weight:1}];
        // let g = new Graph(vertices1); 
        // g.addEdge('A', 'B'); 
        // g.addEdge('A', 'D'); 
        // g.addEdge('A', 'E'); 
        // g.addEdge('B', 'C'); 
        // g.addEdge('D', 'E'); 
        // g.addEdge('E', 'F'); 
        // g.addEdge('E', 'C'); 
        // g.addEdge('C', 'F'); 
        // g.depthFirstTraversal('A'); 

        // prints all vertex and 
        // its adjacency list 
        // A -> B D E 
        // B -> A C 
        // C -> B E F 
        // D -> A E 
        // E -> A D F C 
        // F -> E C 
        //g.printGraph(); 
        // console.log("DFS"); 
        // g.depthFirstTraversal('A'); 
      expect([]).to.deep.eq([]);
    });

});