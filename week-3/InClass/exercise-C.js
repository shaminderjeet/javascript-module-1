function magician(yourFunc){
    console.log("I am magician! Watch as i mutate an array of strings to your heart's content")
    const namesArray=["Janes","Isha","Smile"];
    const magicOutPut=yourFunc(namesArray)
    return magicOutPut
}
function upperCase(array){
    return array.map(word=>word.toUpperCase())
}
console.log(magician(upperCase))