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
        // console.log("head not null")
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

    tail() { //5
        if (this.head == null ) return ("head is null");
        let temporary = this.head
        while (temporary.next!= null) {
            temporary = temporary.next;
        }
        return temporary;
    }

    at(index) { //6
        if (index < 0 || index > this.length) { //index start at 0 or 1?
            return ("inexistent index")
        } 
        let temporary = this.head;
        for (let i = 0; i < index; i++) {
            temporary = temporary.next;
        }
        return temporary;
    }

    pop() { //7
        if (this.head == null) return ("head is null");
        if (this.head.next == null) {
            this.length -= 1;
            return this.head = null;
        }
        let temporary = this.head;
        while (temporary.next.next != null) {
            temporary=temporary.next;
        }
        temporary.next = null;
        this.length -= 1;
    }

    contains(value) { //8
        if (this.head == null) return ("head is null");
        let temporary = this.head;
        while (temporary != null && temporary.value != value) {
            temporary = temporary.next;
        }
        if (temporary == null) return false;
        else return true;
    }

    find(value) { //9
        if (this.head == null) return ("head is null");
        let temporary = this.head;
        let index = 0;
        while (temporary != null && temporary.value != value) {
            temporary = temporary.next;
            index += 1;
        }    
        if (temporary == null) return null;
        return index;
    }

    toString() { //10
        if (this.head == null) return ("head is null");
        let temporary = this.head;
        let listAsString = "";
        while (temporary != null) {
            listAsString += ((temporary.value) + " -> ");
            temporary = temporary.next;
        }
        listAsString += null;
        return listAsString;
    }

    insertAt(value, index) { //11
        if (this.head == null) return ("head is null");
        if (index < 0 || index > this.length) { 
            return ("inexistent index")
        } 
        if (index == 0) return this.prepend(value);


        let temporary = this.head;
        for (let i = 1; i < index; i++) { //start at 1 so we stop 1 before index
            temporary = temporary.next;
        }
        temporary.next = new Node(value, temporary.next);
        this.length += 1;
    }

    removeAt(index) { //12
        console.log(this.length)
        if (this.head == null) return ("head is null");
        if (index < 0 || index > this.length-1) {
            return ("inexistent index");
        } 

        if (index == (this.length -1)) {
            this.pop();
        } else {
            let temporary = this.head;
            for (let i = 1; i < index; i++) {
                temporary = temporary.next;
            }
            temporary.next = temporary.next.next;
            this.length -= 1;
        }
    }
}

let test = new LinkedList;
test.prepend("prepend1");
test.append("append1");
test.append("append2")
console.log(test);

// test.append("append1") //test 1
// test.prepend("prepend1") //test 2
// console.log(test.size()) //test 3
// console.log(test.head()) //test 4
// console.log(test.tail()) //test 5
// console.log(test.at(2)) //test 6
// test.pop() //test 7
//console.log(test.contains("append2")) //test 8
// console.log(test.find("append2")); //test 9
// console.log(test.toString()); //test 10
// test.insertAt("pasta", 2) //test 11
// test.removeAt(2) //test 12




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