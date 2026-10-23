class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        let stack: number[] = []
        let result: number;
        for(let ele of tokens){
            let operand1: number;
            let operand2: number;
            if(ele !== "*" && ele !== "+" && ele !== "/" && ele !== "-"){
                stack.push(parseInt(ele))
            }else{
                operand1 = stack.pop();
                operand2 = stack.pop();
                switch(ele){
                    case "*":
                        result = operand2 * operand1;
                        stack.push(result);
                        break;
                    case "+":
                        result = operand2 + operand1;
                        stack.push(result);
                        break;
                    case "-":
                        result = operand2 - operand1;
                        stack.push(result);
                        break;
                    case "/":
                        result = Math.trunc(operand2/operand1);
                        stack.push(result);
                        break;
                }
            }
        }
        return stack.pop();
    }
}
