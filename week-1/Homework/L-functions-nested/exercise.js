var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function nameInUpperCase(name){
    return(name.toUpperCase());
}
function shoutyGreeting(name){
    const upperCaseName=nameInUpperCase(name)
return `hello${upperCaseName}`
}
console.log(shoutyGreeting())