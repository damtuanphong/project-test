import { expect } from "chai";
import { Graph } from "../src/graph";

describe("# Acyclic graph Test", () => {

  it("Find a path with origin vertex does not exist in graph ", () => {

    const vertices = [ {name:'A',weight:1}, {name:'B',weight:2}, {name:'C',weight:2}];
    let graph = new Graph(vertices); 
    graph.addEdge('A', 'B'); 
    graph.addEdge('B', 'C'); 
    graph.addEdge('A', 'C'); 
    const result = graph.findOptimalPath('D');
    expect(result.path).to.eq("D");
    expect(result.sumOfWeights).to.eq(0);
  
  });

  it("Find a path with 3 vertices in graph ", () => {

      const vertices = [ {name:'A',weight:1}, {name:'B',weight:2}, {name:'C',weight:2}];
      let graph = new Graph(vertices); 
      graph.addEdge('A', 'B'); 
      graph.addEdge('B', 'C'); 
      graph.addEdge('A', 'C'); 
      const result = graph.findOptimalPath('A');
      expect(result.path).to.eq("A,B,C");
      expect(result.sumOfWeights).to.eq(5);
    
  });

  it("Find a path with 4 vertices in graph ", () => {

    const vertices = [ {name:'A',weight:1}, {name:'B',weight:2}, {name:'C',weight:2}, {name:'D',weight:1}];
    let graph = new Graph(vertices); 
    graph.addEdge('A', 'B'); 
    graph.addEdge('B', 'C'); 
    graph.addEdge('A', 'C'); 
    graph.addEdge('A', 'D'); 
    const result = graph.findOptimalPath('B');
    expect(result.path).to.eq("B,C");
    expect(result.sumOfWeights).to.eq(4);
      
  });

  it("Find a path with 5 vertices in graph ", () => {

    const vertices = [ {name:'A',weight:1}, {name:'B',weight:2}, {name:'C',weight:2},
                   {name:'D',weight:1}, {name:'E',weight:2}];
    let graph = new Graph(vertices); 
    graph.addEdge('A', 'B'); 
    graph.addEdge('B', 'C'); 
    graph.addEdge('A', 'C'); 
    graph.addEdge('A', 'D'); 
    graph.addEdge('D', 'E'); 
    const result = graph.findOptimalPath('A');
    expect(result.path).to.eq("A,B,C,D,E");
    expect(result.sumOfWeights).to.eq(8);
     
  });

  it("Find a path with 6 vertices in graph ", () => {

    const vertices = [ {name:'A',weight:1}, {name:'B',weight:2}, {name:'C',weight:2}, 
                    {name:'D',weight:1}, {name:'E',weight:2}, {name:'F',weight:1}];
    let graph = new Graph(vertices); 
    graph.addEdge('A', 'B'); 
    graph.addEdge('A', 'D'); 
    graph.addEdge('A', 'E'); 
    graph.addEdge('B', 'C'); 
    graph.addEdge('D', 'E'); 
    graph.addEdge('E', 'F'); 
    graph.addEdge('E', 'C'); 
    graph.addEdge('C', 'F'); 
    const result = graph.findOptimalPath('A');
    expect(result.path).to.eq("A,B,C,D,E,F");
    expect(result.sumOfWeights).to.eq(9);

  });

});