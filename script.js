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

LinkedList.prototype.headList = function(){
    if(this.head === null){
        return this.head
    }
    if(this.head !== null){
        const firstNode = new Node(this.head.value)
        return firstNode
    }
}

LinkedList.prototype.tail = function(){
    let lastNode = this.head
    if(lastNode !== null){
        while (lastNode.next !== null) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}

LinkedList.prototype.at = function(i){
    if(i < 0 || i >= this.size()){
        return 'not available'
    }
    if(this.head === null){
        return this.head
    }
    let node = this.head
    for (let index = 0; index < i; index++) {
        node = node.next
    }
    return new Node(node.value)
}

LinkedList.prototype.pop = function(){
    if(this.size() === 0){
        return null
    }

    if(this.size() === 1){
        const first = this.head
        this.head = null
        return first
    }

    let lastNode = this.tail()
    let i = this.size() - 2
    let positionRemove = this.head

    for (let index = 0; index < i; index++) {
        positionRemove = positionRemove.next
    }
    positionRemove.next = null
    return lastNode
}

LinkedList.prototype.contains = function(value){
    if(this.head === null){
        return false
    }

    if(this.size() === 1){
        return this.head.value === value
    }

    let i = this.size()
    let node = this.head
    for (let index = 0; index < i; index++) {
        if(node.value === value){
            return true
        }
        node = node.next
    }

    return false
}

const list = new LinkedList()

list.append('hamburger')
list.append('spinach')
list.append('snake')
list.prepend('hello')

console.log(list.contains('snake'))