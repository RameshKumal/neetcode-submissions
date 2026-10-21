class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        // for(let i = 0; i < board.length; i++){
        //     const rowSet: Set<string> = new Set();
        //     for(let j = 0; j < board[i].length; j++){
        //         if(rowSet.has(board[i][j])){
        //             return false;
        //         }else if(board[i][j] !== "."){
        //             rowSet.add(board[i][j]);
        //         }
        //     }
        // }

        // for(let i = 0; i < board.length; i++){
        //     const colSet: Set<string> = new Set();
        //     for(let j = 0; j < board[i].length; j++){
        //         if(colSet.has(board[j][i])){
        //             return false;
        //         }else if(board[j][i] !== "."){
        //             colSet.add(board[j][i]);
        //         }
        //     }
        // }
        const rows: Set<string>[] = Array.from({length: 9},()=> new Set<string>());
        const cols: Set<string>[] = Array.from({length: 9},()=> new Set<string>());
        const boxes: Set<string>[] = Array.from({length: 9}, ()=> new Set<string>());
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                const digit = board[i][j];
                if(digit === ".") continue;
                const boxNum = (Math.floor(i/3) * 3 + Math.floor(j/3));
                if(rows[i].has(digit)) return false;
                if(cols[j].has(digit)) return false;
                if(boxes[boxNum].has(digit)) return false;

                rows[i].add(digit);
                cols[j].add(digit);
                boxes[boxNum].add(digit);
            }
        }

        return true
    }
}
