class FakeVectorClass {
    constructor(capacity = 0) {
        this.length = 0;
        this.arr = new Array(capacity);
        this.length = capacity;
    }
    get(index) {
        if (index < 0) {
            throw new Error("Index should be positive!");
        }
        else if (index >= this.length) {
            throw new Error("Index out of bounds!");
        }
        else
            return this.arr[index];
    }
    set(index, value) {
        if (index < 0) {
            throw new Error("Index should be positive!");
        }
        else if (index >= this.length) {
            throw new Error("Index out of bounds!");
        }
        else
            this.arr[index] = value;
    }
    push(value) {
        let newArr = new Array(Math.max(this.length * 2, 1));
        for (let i = 0; i < this.arr.length; i++) {
            newArr[i] = this.arr[i];
        }
        delete this.arr;
        this.arr = newArr;
        this.arr[this.length] = value;
        this.length++;
    }
    pop() {
        if (this.length == 0) {
            throw new Error("No more elements to pop!");
        }
        this.length--;
        return this.arr.pop();
    }
    insert(index, value) {
        let newArr = new Array(Math.max(this.length * 2, 1));
        for (let i = 0; i < this.arr.length; i++) {
            newArr[i] = this.arr[i];
        }
        delete this.arr;
        this.arr = newArr;
        for (let i = this.arr.length; i > index; i--) {
            this.arr[i] = this.arr[i - 1];
        }
        this.arr[index] = value;
        this.length++;
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.length; i++) {
            yield this.arr[i];
        }
    }
}
function output_list(list) {
    // output each item in the list
    for (let it of list)
        console.log(it);
}
try {
    let fakeVectorObject = new FakeVectorClass();
    console.log("\nPush 1,2 ...\n");
    fakeVectorObject.push(1);
    fakeVectorObject.push(2);
    output_list(fakeVectorObject);
    console.log("\n--------------- ");
    console.log("\nPop once ...\n");
    fakeVectorObject.pop();
    output_list(fakeVectorObject);
    console.log("\nPop twice ...\n");
    fakeVectorObject.pop();
    output_list(fakeVectorObject);
    console.log("\nPop thrice ...\n");
    fakeVectorObject.pop();
    output_list(fakeVectorObject);
    console.log("\n--------------- ");
}
catch (err) {
    console.log(err.message);
}
