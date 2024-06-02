class Node {
    constructor(value=null, nextNode=null) {
        this._value = value; 
        // this._nextNode = nextNode;
    }    
}


class LinkedList {
    constructor(fullList) {
        // this._fullList = fullList;
        this._head = null;
    }

    prepend(value) { //2
        this._head = new Node(value)
        return this._head;
    }

    head(value) { //4
        if (this._head == null) return ("head is null");
        console.log("head not null")
        return this._head._value;        
    }

    append(value) { //1
        if (this._head == null) {
            // console.log("pasta")
            this.prepend(value)
        } else {
            // console.log("tuna")
            let temporary = this._head;
            while (temporary.nextNode != null) {
                temporary = temporary.nextNode;
            }
            temporary.nextNode = new Node(value);
        }
    }
}

let test = new LinkedList;
test.prepend("prepend1")
test.append("append1")
test.append("append2")

console.log(test)
console.log(test.head())
// console.log(head)





// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10                                             
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null	
//                     }
//                 }
//             }
//         }
//     }