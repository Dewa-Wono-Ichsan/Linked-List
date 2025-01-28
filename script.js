function LinkedList(head = null){
    this.head = head
}

function Node(value = null, next = null){
    this.value = value
    this.next = next
}

LinkedList.prototype.append = function(value){
    if(this.head === null){

        this.head = new Node(value)
        return
    }

    let lastNode = this.head

    if(this.head !== null){

        while (lastNode.next !== null) {
            lastNode = lastNode.next
        }
    }

    return lastNode.next = new Node(value)
}

LinkedList.prototype.prepend = function(value){
    if(this.head === null){
        this.head = new Node(value)
        return
    }
    let taken = this.head
    taken
    this.head = new Node(value)
    this.head.next = taken
}

LinkedList.prototype.size = function(){
    let count = 0
    if(this.head === null){
        return count
    }
    let lastNode = this.head
    ++count
    if(this.head !== null){
        while (lastNode.next !== null) {
            lastNode = lastNode.next
            ++count
        }
    }
    return count
}

const list = new LinkedList()

list.append('hamburger')
list.append('spinach')
list.append('snake')
list.prepend('hello')

console.log(list)