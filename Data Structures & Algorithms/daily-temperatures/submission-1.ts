class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result: number[] = Array(temperatures.length).fill(0);
        const stack: number[] = [];

        for(let i = 0; i < temperatures.length; i++){
            if(!stack.length){
                stack.push(i)
            }else{
                let topIndex = stack[stack.length - 1];
                while(temperatures[i] > temperatures[topIndex]){

                    result[topIndex] = i - topIndex 
                    stack.pop()
                    topIndex = stack[stack.length - 1];
                }
                    stack.push(i)
                
            }
        }
        return result
    }
}
