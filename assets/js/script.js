
//parametre
function merhabaDe(isim,yas) {
    console.log("merhaba",isim,"senin yasin",yas);
}
merhabaDe("büşra",23);

//defoult değer atanırsa
function helloDe(isim="busra",yas=23,boy="172") {
    console.log("merhaba",isim,"senin yasin",yas);
}
helloDe();


//spread operatorler
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}


//ornek
function hi(isim="busra",yas="",boy="") {
    return `merhaba${isim}, senin yasin ${yas} senin boyun ${boy}`
}
hi(hi("büşra",23,172));





















