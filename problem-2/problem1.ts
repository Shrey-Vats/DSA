function maximumWealth(accounts: number[][]): number {
    let arr: number[] = [];

    for(let i = 0; i < accounts.length; i++){
        let num: number = 0;
        for (let a = 0; a < accounts[i].length ; a ++){
            num +=  accounts[i][a];
        };
        arr.push(num)
    }

    arr.sort()
    console.log(arr)

    return arr[arr.length - 1]
};

const one = maximumWealth([[1,5],[7,3],[3,5]])

console.log(one)

const two = maximumWealth([[1,2,3],[3,2,1]])

console.log(two)

const three = maximumWealth([[2,8,7],[7,1,3],[1,9,5]])

console.log(three)