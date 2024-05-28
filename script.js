class LinkedList {
    constructor(value) {
        this._value = value;
    }
    append(value) {

    }
}

class Node {
    constructor(value, nextNode) {
        this._value = value; // is this correct or should they be this._value = null?
        this._nextNode = value;
    }    
}

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