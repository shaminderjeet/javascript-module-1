function feelToday(pass){
    // if(pass=="happy"){
    //     return "Good Job!You are doing great";
    // }
    // else if (pass=="bad") {
    //     return "Every cloud has a silver lining";
    // }
    // else if (pass==15){
    //     return"Beep beep boop"
    // }
    // else{
    //     return " I'm sorry,i am still learning about feelings"
    // }
    return pass=="happy" ? "Good Job!You are doing great"
    : pass=="bad" ? "Every cloud has a silver lining":
     pass==15 ? "Beep beep boop"
    :" I'm sorry,i am still learning about feelings"
}


console.log(feelToday(15));