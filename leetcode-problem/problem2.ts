function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    let num1: number = 0;
    let num2:  number = 0
    for (let i = 0; i < nums1.length; i ++){
        if (nums2.includes(nums1[i])){
            num1 += 1
        } 
    }
    for (let a = 0; a < nums2.length; a++){
        if (nums1.includes(nums2[a])){
            num2 += 1 ;
        }
    }

    return [num1, num2]
};

console.log(findIntersectionValues([1,2,2,1], [2,2]))
console.log(findIntersectionValues([4,9,5], [9,4,9,8,4]))


// approch 2

function findIntersectionValues1(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    let num1 = 0, num2 = 0

    for (const num of nums2) if( set2.has(num) ) num1++
    for (const num of nums1) if( set1.has(num)) num2++

    return [num1, num2]
}