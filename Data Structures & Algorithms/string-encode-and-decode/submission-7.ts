class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const res: string[] = []
        for(let str of strs){
            //4#neet
            res.push(String(str.length),"#", str);
        }
        return res.join("");

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = [];
        let i = 0;
        while( i < str.length){
            let j = i;
            while(str[j] !== "#"){
                j++;
            }
            const length = parseInt(str.substring(i,j),10);
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i=j
        }
        return res;
    }
}
