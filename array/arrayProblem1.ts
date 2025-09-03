
function GiveIndex(arr: number[], target: number) {
    let index: number | undefined;
    for (const a of arr) {
        if ( a === target){

            index = arr.indexOf(a)
            return index
            
        } else if ( a < target){

            arr.push(target)
            index = arr.indexOf(target)
            return index

        }
    }
}