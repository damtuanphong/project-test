
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

    // add vertex to the graph 
    private addVertex(v: Vertex) { 
        this.adjacencyList.set(v, []); 
    } 

    // add edge to the graph 
    public addEdge(v: string, w: string) 
    { 
        const vertexV = this.getVertexByName(v);
        const vertexW = this.getVertexByName(w);
        this.adjacencyList.get(vertexV).push(vertexW);
    } 

    public getVertexByName(name: string): Vertex{
        for (let [k, _] of this.adjacencyList){
            if(k.name === name){
                return k;
            }
        }
    }

	public depthFirstTraversal(startingNode: string) { 
        let visited = []; 
        for (let i = 0; i < this.numberOfVertices; i++) {
            visited[i] = false; 
        }
        const vertex = this.getVertexByName(startingNode);
        this.traversal(vertex, visited); 
    } 

    private traversal(vert: Vertex, visited: any) { 
        visited[vert.name] = true; 
        console.log(vert.name); 
        const neighbours = this.adjacencyList.get(vert); 
        //console.log(neighbours); 
        for (let i in neighbours) { 
            let neighbour = neighbours[i];                        
            if (!visited[neighbour.name]){
                this.traversal(neighbour, visited); 
            }
        } 
    }

}
