class Node {
    constructor(value=null, next=null) {
        this.value = value; 
        this.next = next;
    }    
}


class LinkedList {
    constructor(fullList) {
        // this._fullList = fullList;
        this.head = null;
        this.length = 0;
    }

    prepend(value) { //2
        this.head = new Node(value, this.head) // is this fine or should I store the value of head in another variable and use that?
        this.length += 1;
        return this.head;
    }

    head() { //4
        if (this.head == null) return ("head is null");
        console.log("head not null")
        return this.head.value;        
    }

    append(value) { //1
        if (this.head == null) {
            this.prepend(value)
        } else {
            let temporary = this.head;
            while (temporary.next != null) {
                temporary = temporary.next;
            }
            temporary.next = new Node(value);
            this.length += 1;
        }

    }
    
    size() { //3
        return this.length
    }
}

let test = new LinkedList;
test.prepend("prepend1")
test.append("append1")
test.append("append2")

console.log(test)


// test.append("append1") //test11
// test.prepend("prepend1") //test 2
// console.log(test.size()) //test 3
// console.log(test.head()) //test 4





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