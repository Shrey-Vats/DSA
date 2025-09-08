function twoSum(nums: number[], target: number): number[] {
    let num: number[] = []
    for (let i = 0; i< nums.length; i++){
        for (let a = i + 1; a < nums.length; a++ ){
            let num1 = nums[i] + nums[a];
            if ( num1 === target){
                num[0] = i;
                num[1] = a;
            }
        }
    } 

    return num
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));


// approch 3

function twoSum1(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        const num = map.get(complement);

        if (!num || num === undefined){
            map.set(nums[i], i);
        } else {
            return [num, i];
        }
    }

    return []
};