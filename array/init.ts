let myName = "shrey vats";
console.log(myName);

let myNameArray: string[] = ["shrey", "ts", "rust", "js"];
console.log(myNameArray)

let myMathScore = 90;
console.log(myMathScore);

let allSubjectScore: number[] = [99, 98, 97, 94, 95]
console.log(allSubjectScore)

//object

let student = {
        class: "9th",
        code: "shrey"
}

console.log(student)

interface Students {
    name: string,
    city: string,
    country: string
}

let students: Students[] = [
    {name: "shreyvas", city: "haridwar", country: "india"},
    {name: "shreyvas", city: "haridwar", country: "india"},
    {name: "shreyvas", city: "haridwar", country: "india"},
    {name: "shreyvas", city: "haridwar", country: "india"}
]

console.log(students)

let arrayControsture = new Array();
arrayControsture[0] = "shrey"
arrayControsture[1] = "love"
arrayControsture[2] = "typescript"
arrayControsture[3] = "coding"

let arrayControsture2: string[] = new Array("shrey", "vats");


let filledArray = new Array(5).fill(0);
console.log(filledArray)


let fromArray = Array.from("shrey")
console.log(fromArray)


let sparseArray = [9,  , 0,   9,  ,8];
console.log(sparseArray);

sparseArray[1] = 9
console.log(sparseArray);

let offArrayPlus = ["shrey", ...fromArray];
console.log(offArrayPlus);

let dynamicArray = [12, "shrey", {sirji: "papa"}];
console.log(dynamicArray)


console.log(dynamicArray[0])


let tech = ["ts", "js", "python"];
let tech1 = tech[0]

let [l1, l2, l3] = tech
console.log(l1, l2, l3);

// 

for (let i = 0; i < tech.length; i++) {
    tech[i] = tech[i] +1;
    console.log
    
}

for (const lan of tech) {
    console.log(lan)
}

tech.forEach(element => {
    console.log(tech)
});

let name1 = ["s", "k", "y"];
