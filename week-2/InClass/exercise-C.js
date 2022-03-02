function numberChecker(num) {
  if (num > 20) {//this statement checks the greater num 
    return `${num} is greater than 20`;
  } else if (num === 20) {//it will do the strict comaprison
    return `${num} is equal to 20`;
  } else if (num < 20) {//it checks less than
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
  // return num;
}
console.log(numberChecker(10));