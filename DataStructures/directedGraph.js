class DirectedGraph {
     constructor(v) {
          if (v<0) throw new Error("Num of vertices less than 0");

          this.v = v || 0; // Число вершин
          this.e = 0; // Число ребер
          this.adj = []; // Матрица смежности
          this.indegree = []; // Матрица "вхождений в точку"

          for (let i=0;i<this.v;i++) { // Инициализация матриц
               this.adj[i] = [];
               this.indegree[i] = 0;
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

     degrees(v) { // Число исходящих ребер из вершины
          this.validate(v);
          return this.adj[v].length;
     }

     indegrees(v) { // Число входящих в вершину ребер
          this.validate(v);
          return this.indegree[v];
     }

     addEdge(from,to) {
          this.validate(from);
          this.validate(to);
          
          this.e++;
          this.adj[from].push(to);
          this.indegree[to]++;
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

let dirGraph = new DirectedGraph(7);

dirGraph.addEdge(1,4);
dirGraph.addEdge(4,2);
dirGraph.addEdge(1,2);
console.log(dirGraph.indegrees(4));