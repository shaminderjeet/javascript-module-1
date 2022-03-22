const year=[1964,2008,1999,2005,1978,1985,1919]
let years=2022;
function birthYear(year){
    return years-year
 }
 function calculateAges(year){
     const age=birthYear(year)
     let drivingAge=17;
     if(age>=drivingAge){
         return `born in ${year} can drive`
     }
     else{
         return `orn in ${year} can drive in ${drivingAge-age}`
         
     }
 }
 const ages=[]
  year.forEach((birthsyear)=>{ages.push(birthYear(birthsyear))})
      console.log(ages)