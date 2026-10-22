class MinStack {
    private stack: number[];
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const ele = this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        const topNum = this.stack[this.stack.length - 1];
        return topNum;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let min = Number.MAX_SAFE_INTEGER;
        for(let ele of this.stack){
            min = Math.min(min, ele);
        }
        return min;
    }
}
