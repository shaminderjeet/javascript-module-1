let engClss=["A","D","F"]
let spaClss=["B","E","H"]
let All=(engClss.concat(spaClss))
console.log(All.sort())
function CheckName(name,arr){
    if(name.includes(arr)){
        return "not in the class"
    }
    else{
        return "in the class"
    }
}
console.log(CheckName(engClss,All))