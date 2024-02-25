const obj = {
    name : "Roush",
    age : 26,
};
console.log(obj.name);

//converting obj into JSON
const jsonData = JSON.stringify(obj);
console.log(jsonData)

// console.log(jsonData.name); //it is wrong

//converting JSON into obj
const data = JSON.parse(jsonData);

console.log(data);
console.log(data.name);