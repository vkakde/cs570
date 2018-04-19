///\cite https://www.youtube.com/watch?v=WCm3TqScBM8

import * as readlineSync from 'readline-Sync';

class MaxHeap {
	// member variable of type array which acts as a heap
    private array: number[];
    
	// default constructor
    constructor () {
        this.array = new Array;
    }

	// this is a helper function to simply swap values at 2 given indices in an array
    private swap (i:number, j:number) {
        let temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    }

	// this is helper function for heapification (called by createMaxHeap)
    private maxHeapify (index:number) {
		// recursive calls until a leaf node is reached
        if (index > Math.floor((this.array.length-2)/2)) return;
		
		// derive left and right child indices
        let leftChild = 2 * index + 1;
        let rigthChild = leftChild + 1;
		
		// assume initially that current index has max value
        let maxIndex = index;
		
		// check if left/right children are greater than root
        if (leftChild < this.array.length && this.array[leftChild] > this.array[maxIndex]){
			maxIndex = leftChild;
		}
        if (rigthChild < this.array.length && this.array[rigthChild] > this.array[maxIndex]){
			maxIndex = rigthChild;
		}
		
		// swap to place max value at root
        this.swap(index, maxIndex);
		
		// recursive calls for left and right sub-heaps
        this.maxHeapify(leftChild);
        this.maxHeapify(rigthChild);
    }
	
	// this function heapifies a given heap
    private createMaxHeap () {
		// count the number of non-leaf nodes
        let lastIndex = Math.floor((this.array.length - 2)/2);
		
		// max heapify for each such non-leaf node
        for (let i = lastIndex; i >=0; i--) {
            this.maxHeapify(i);
        }
    }

	// this function adds new element to heap
    public add (num: number) :void {
		// add element to end of array (available leaf in heap)
        this.array.push(num);
		
		// heapify 
		this.createMaxHeap();
    }

	// this function deletes the root of heap
    public delete (): number {
        this.swap(0, this.array.length-1);
        let temp = this.array.pop();
        this.createMaxHeap();
        return temp;
    }

	// this function outputs to console the root of heap, then invokes function to delete this root
    public output ():void {
        while(this.array.length) {
            console.log(this.delete());
        }
    }
}

// create new heap
let maxHeap = new MaxHeap();
let count = 10;
console.log("Input 10 numbers, one per line:");
while (count) {
	let input: any;
	input = readlineSync.question('>> ');
    input = parseInt(input);
    if (!isNaN(input)) {
        maxHeap.add(input);
        count--;
    } else {
        console.log('Input must be a number!')
        continue;
    }
}

console.log('\nOutput: ');
maxHeap.output();


