class UndirectedGraph {
     constructor(v) {
          if (v<0) throw new Error("Num of vertices less than 0");

          this.v = v || 0; // Число вершин
          this.e = 0; // Число ребер
          this.adj = []; // Матрица смежности

          for (let i=0;i<this.v;i++) { // Инициализация матрицы
               this.adj[i] = [];
          }
     }

     vertices() {
          return this.v;
     }

     edges() {
          return this.e;
     }

     validate(v) {
          if (v<0 || v>=this.v) throw new Error("Vertex is not valid");
     }

     degree(v) { // Число исходящих ребер из вершины
          this.validate(v);
          return this.adj[v].length;
     }

     addEdge(from,to) {
          this.validate(from);
          this.validate(to);
          
          this.e++;
          this.adj[from].push(to);
          this.adj[to].push(from);
     }

     addVertex() {
          this.v++;
          this.adj[this.v-1] = [];
     }

     adjacent(v) {
          this.validate(v);
          return this.adj[v];
     }
}

let udGraph = new UndirectedGraph(7);

udGraph.addEdge(1,4);
udGraph.addEdge(4,5);
udGraph.addEdge(1,5);
udGraph.addVertex();
udGraph.addEdge(4,7);
console.log(udGraph.adjacent(4));