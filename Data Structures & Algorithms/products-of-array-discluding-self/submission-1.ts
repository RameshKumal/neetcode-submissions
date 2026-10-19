class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        //Optimized using the prefix and suffix
        let prefix = 1
        const prefixProd: number[]= [];
        prefixProd.push(prefix);

        for(let i = 0; i < nums.length - 1; i++){
            prefix *= nums[i];
            prefixProd.push(prefix);
        }
        let suffix = 1;
        let suffixProd: number[] = [];
        suffixProd.push(suffix);
        for(let j = nums.length - 1; j > 0; j--){
            suffix *= nums[j];
            suffixProd.push(suffix);
        }
        const length = prefixProd.length - 1;
        for(let i = 0; i <= length; i++){
            prefixProd[i] *= suffixProd[length - i]
        }
        return prefixProd;
    }
}
