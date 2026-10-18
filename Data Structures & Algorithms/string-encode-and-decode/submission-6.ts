class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if(strs.length === 0) return ""
        //Adding the sizes of each string inside array with 
        //[4, 3, 2]
        const sizes: number[] = [];
        //Adding the str length from sizes array with comma separated
        //["4,","3,","2,"]
        const parts: string[] = [];

        for(let str of strs){
            sizes.push(str.length);
        }

        for(let sz of sizes){
            parts.push(String(sz),",")
        }
        parts.push("#", ...strs);
        return parts.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(!str.length) return []
        const sizes: number[] = [];
        const res: string[] = [];

        let i = 0;
        console.log(str)
        //extracted sizes from encoded string!
        while(str[i] !== "#"){
            let j = i;
            while(str[j] !== ","){
                j++;
            }
            sizes.push(parseInt(str.substring(i,j), 10));
            i = j + 1;
        }
        i++;

        for(let sz of sizes){
            res.push(str.substr(i,sz));
            i += sz;
        }
        return res;
    }
}
