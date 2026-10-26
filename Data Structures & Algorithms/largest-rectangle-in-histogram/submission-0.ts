class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxArea: number = 0;
        const stack: number[] = [];// this will store heights index
        const n = heights.length;

        for(let i = 0; i <= n; i++){
            while(stack.length && (
                i === n || heights[stack[stack.length-1]] > heights[i]
            )){
                const height = heights[stack.pop()];
                const width = stack.length === 0 ? i
                    : i - stack[stack.length - 1] - 1
                maxArea = Math.max(height * width , maxArea);
            }
            stack.push(i);
        }
        return maxArea;
    }
}
