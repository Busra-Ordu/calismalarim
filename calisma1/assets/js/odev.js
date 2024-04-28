async function getData(){
    const request = await fetch("/assets/json/data.json");
    const data = await request.json();
    return data;
}


const date= new Date();


async function init(){
    const data = await getData();
    let deneme= data.ogrenciler
    const ogrenciYas = deneme.map(kullanici=>kullanici.dogumYili={yas:`${date.getFullYear()-kullanici.dogumYili}`}).filter(ogrenci => ogrenci.yas > 25)
    console.log(ogrenciYas);
}





init();