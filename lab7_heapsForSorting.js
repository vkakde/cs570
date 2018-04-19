"use strict";
///\cite https://www.youtube.com/watch?v=WCm3TqScBM8
exports.__esModule = true;
var readlineSync = require("readline-Sync");
var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.array = new Array;
    }
    MaxHeap.prototype.swap = function (i, j) {
        var temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    };
    MaxHeap.prototype.maxHeapify = function (index) {
        // recursive calls until a leaf node is reached
        if (index > Math.floor((this.array.length - 2) / 2))
            return;
        // derive left and right child indices
        var leftChild = 2 * index + 1;
        var rigthChild = leftChild + 1;
        // assume initially that current index has max value
        var maxIndex = index;
        // check if left/right children are greater than root
        if (leftChild < this.array.length && this.array[leftChild] > this.array[maxIndex]) {
            maxIndex = leftChild;
        }
        if (rigthChild < this.array.length && this.array[rigthChild] > this.array[maxIndex]) {
            maxIndex = rigthChild;
        }
        // swap to place max value at root
        this.swap(index, maxIndex);
        // recursive calls for left and right sub-heaps
        this.maxHeapify(leftChild);
        this.maxHeapify(rigthChild);
    };
    // this function heapifies a given heap
    MaxHeap.prototype.createMaxHeap = function () {
        // count the number of non-leaf nodes
        var lastIndex = Math.floor((this.array.length - 2) / 2);
        // max heapify for each such non-leaf node
        for (var i = lastIndex; i >= 0; i--) {
            this.maxHeapify(i);
        }
    };
    MaxHeap.prototype.add = function (num) {
        // add element to end of array (available leaf in heap)
        this.array.push(num);
        // heapify 
        this.createMaxHeap();
    };
    // this function deletes the root of max heap
    MaxHeap.prototype["delete"] = function () {
        this.swap(0, this.array.length - 1);
        var temp = this.array.pop();
        this.createMaxHeap();
        return temp;
    };
    // this function outputs to console the root of heap, then invokes function to delete this root
    MaxHeap.prototype.output = function () {
        while (this.array.length) {
            console.log(this["delete"]());
        }
    };
    return MaxHeap;
}());
var maxHeap = new MaxHeap();
var count = 10;
console.log("Please type in 10 numbers, one at a time");
while (count) {
    var input = void 0;
    input = readlineSync.question('>> ');
    input = parseInt(input);
    if (!isNaN(input)) {
        maxHeap.add(input);
        count--;
    }
    else {
        console.log('Input must be a number!');
        continue;
    }
}
console.log('\nOutput: ');
maxHeap.output();
