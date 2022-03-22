const year=[1964,2008,1999,2005,1978,1985,1919]
let years=2022;
function birthYear(year){
    return years-year
 }
 const ages=[]
  year.forEach((birthsyear)=>{ages.push(birthYear(birthsyear))})
      console.log(ages)