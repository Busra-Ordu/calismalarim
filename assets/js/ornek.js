// const data=(fetch("/assets/json/data.json").then(r=>r.json()))
const button1= document.querySelector(".button1")

async function getData() {
    const request = await fetch("/assets/json/data.json");
    const data= await request.json();
    return data;
}


async function init() {
    const data= await getData();
    // console.log(data);
    const bigStudents=data.ogrenciler.filter(ogrenci=>ogrenci.yas > 22)
    // console.log(bigStudents);
    
}




init();