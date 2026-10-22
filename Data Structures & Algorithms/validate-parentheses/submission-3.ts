class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        for(let char of s){
            if(char === "(" || char === "{" || char === "["){
               stack.push(char);
            }else{
                let lastChar : string = stack.pop()
                if(char === ")" && lastChar !== "(" ){
                    return false;
                }else if(char === "}" && lastChar !== "{"){
                    return false;
                }else if( char === "]" && lastChar !== "["){
                    return false;
                }
            }
        }
        return stack.length ? false : true;
    }
}
