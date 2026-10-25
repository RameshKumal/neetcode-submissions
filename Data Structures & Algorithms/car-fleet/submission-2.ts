class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const resultStack: number[] = [];
        const fleetData: Record<string, number>[] = [];

        for(let i = 0; i < position.length; i++){
            const obj = {
                "position": position[i],
                "speed": speed[i] 
            }
            fleetData.push(obj)
        }
        fleetData.sort((a,b) => b.position - a.position);

        for (let fleet of fleetData) {
            const arrivalTime = (target - fleet.position) /fleet.speed ;
            if (!resultStack.length) {
                resultStack.push(arrivalTime);
            } else {
                const latestArrivalTime = resultStack[resultStack.length - 1];
                if (arrivalTime > latestArrivalTime) {
                    resultStack.push(arrivalTime);
                }
            }
        }
        return resultStack.length;
    }
}
