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

const list = new LinkedList()

list.append('hamburger')
list.append('spinach')

console.log(list)