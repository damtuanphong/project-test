
class Vertex{
    name: string;
    weight : number;
    constructor(_name: string, _weight: number){
        this.name = _name;
        this.weight = _weight;
    }

}

export class Graph {
    private numberOfVertices : number;
    private adjacencyList = new Map<Vertex, Vertex[]>();
	constructor(vertices: Vertex[]) 
	{ 
        this.numberOfVertices = vertices.length; 
        for (let i = 0; i < this.numberOfVertices; i++) {
            this.addVertex(vertices[i]);
        }
	} 

    private addVertex(v: Vertex) { 
        this.adjacencyList.set(v, []); 
    } 

    public addEdge(v: string, w: string) 
    { 
        const vertexV = this.getVertexByName(v);
        const vertexW = this.getVertexByName(w);
        this.adjacencyList.get(vertexV).push(vertexW);
    } 

    private getVertexByName(name: string): Vertex{
        for (let [vertex, _] of this.adjacencyList){
            if(vertex.name === name){
                return vertex;
            }
        }
    }

	private depthFirstTraversal(vertex: Vertex) { 
        let visited = {}; 
        // for (let i = 0; i < this.numberOfVertices; i++) {
        //     visited[i] = false; 
        // }        
        this.traversal(vertex, visited); 
        return visited;
    } 

    private traversal(vert: Vertex, visited: any) { 
        visited[vert.name] = true; 
        const neighbours = this.adjacencyList.get(vert);  
        for (let i in neighbours) { 
            let neighbour = neighbours[i];                        
            if (!visited[neighbour.name]){
                this.traversal(neighbour, visited); 
            }
        } 
    }

    public findOptimalPath(startingNode: string) {
        let path = startingNode;
        let sumOfWeights = 0
        const vertex = this.getVertexByName(startingNode);        
        if(vertex){
            const vertices = this.depthFirstTraversal(vertex);
            const visited = [];
            for (let [vertex, _] of this.adjacencyList){
                if(vertices[vertex.name]){
                    visited.push(vertex.name);
                    sumOfWeights = sumOfWeights + vertex.weight;
                }
            }
            path = visited.toString();
        }
        return {
            path: path,
            sumOfWeights: sumOfWeights
        };
    }

}
