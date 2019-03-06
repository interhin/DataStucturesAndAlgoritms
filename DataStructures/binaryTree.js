class Node {
    constructor(value,left,right) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
}

class BST {
    constructor() {
        
    }

    nodeExists(node) {
        return node!=null && node.value!=null; // Является ли данный узел указателем на null от листа
    }

    createNode(node,value) {
        node.left = new Node();
        node.right = new Node();
        node.value = value;
    }

    insert(rootNode,value) {
        if (!this.nodeExists(rootNode)) this.createNode(rootNode,value); // Если данный узел указатель на null от листа то делаем из него лист
        else if (value < rootNode.value) this.insert(rootNode.left,value); // Если значение меньше текущего узла то идем влево рекурсивно
        else if (value >= rootNode.value) this.insert(rootNode.right,value); // Если больше то вправо
    }

    search(rootNode,value) {
        if (!this.nodeExists(rootNode)) return null; // Если мы дошли до указателя null от листа значит такого значения нет
        if (value === rootNode.value) return rootNode; // Если текущее значение равно искомому возвращаем узел
        if (value > rootNode.value) return this.search(rootNode.right,value); // Если больше идем дальше рекурсивно вправо
        return this.search(rootNode.left,value); // Иначе рекурсивно идем влево
    }

    getMin(node) {
        if (!this.nodeExists(node)) return null; // Проверяем не передан ли пустой узел
        if (!this.nodeExists(node.left)) return node; // Если слева от текущего узла ничего нет значит мы нашли наименьшее значение
        return this.getMin(node.left); // Идем постоянно рекурсивно влево пока не найдем наименьшее значение

    }

    getMax(node) { // Аналогично для максимального только идем вправо
        if (!this.nodeExists(node)) return null;
        if (!this.nodeExists(node.right)) return node;
        return this.getMax(node.right);
    }

    showNodesInOrder(node) {
        if (!this.nodeExists(node)) return; // Крайний случай рекурсии (Мы дошли до указателя на null от листа)
        // "Погружаемся в самый низ дерева по левой стороне, затем постепенно поднимаемся и" (тупое объяснение)
        this.showNodesInOrder(node.left); // Показываем сначала левый лист
        console.log(node.value); // Затем значение корня
        this.showNodesInOrder(node.right); // Затем правый лист
    }

    transplantNode(fromNode,toNode) { 
        toNode.value = fromNode.value;
        toNode.left = fromNode.left;
        toNode.right = fromNode.right;
    }

    getChildrenCount(node) {
        let count = 0;
        if (this.nodeExists(node.left)) count++;
        if (this.nodeExists(node.right)) count++;
        return count; 
    }

    getLeftOrRight(node) {
        return this.nodeExists(node.left) ? node.left : node.right;
    }

    removeNodeWithOneOrZeroChild(node) {
        let child = this.getLeftOrRight(node);
        this.transplantNode(child,node);
    }

    remove(root,value) {
        let nodeToDelete = this.search(root,value); // Находим узел который нужно удалить
        if (!this.nodeExists(nodeToDelete)) return false; // Если узел не был найдем то возвращаем false

        // Смотрим сколько детей у узла
        if (this.getChildrenCount(nodeToDelete) < 2) { // Если меньше 2, то просто перемещаем лист на место узла 
            this.removeNodeWithOneOrZeroChild(nodeToDelete);
        } else { // Иначе ищем минимальный лист в правой стороне
            let minNode = this.getMin(nodeToDelete.right);
            nodeToDelete.value = minNode.value; // Перемещаем его значение на место узла который нужно удалить
            this.removeNodeWithOneOrZeroChild(minNode); // И затем удаляем старое место перемещенного узла
        }

        return true;
    }
}

let binaryTree = new BST();
let rootNode = new Node();
binaryTree.createNode(rootNode,9);
binaryTree.insert(rootNode,10);
binaryTree.insert(rootNode,7);
binaryTree.insert(rootNode,3);
binaryTree.insert(rootNode,6);
binaryTree.insert(rootNode,5);
binaryTree.insert(rootNode,8);

//binaryTree.remove(rootNode,8);
console.log(binaryTree.search(rootNode,6).right);
//binaryTree.showNodesInOrder(rootNode);
//console.log(binaryTree.getMax(rootNode).value);
