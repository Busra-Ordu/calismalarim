// map ornek
const dizi= Array.from({length:5});
console.log(dizi);

const yeniDizi=dizi.map((eleman,index)=> eleman=index+1)

console.log(yeniDizi);

// foreach ornek
const dizi2=[10,"furkan","frontend sinifi",true]
dizi2.forEach(eleman=> console.log(eleman))
const yeniDizi2 = dizi.map(eleman=>eleman="artık hepsi böyle oldu");
console.log(yeniDizi2);


// find örnek
const dizi3=[10,"furkan","frontend sinifi",true]
const yeniDizi3 = dizi.find(eleman=>eleman =="busra");


// filter örnek
const dizi4=[10,"furkan","frontend sinifi",true]
const yeniDizi4 = dizi.filter(eleman=>eleman =="busra");


// filter ornek 2
const urunler=[
    {
        adi:"pc",
        fiyat:40000
    },
    {
        adi:"ayakkabi",
        fiyat:3000
    },
    {
        adi:"telefon",
        fiyat:15000
    }
]

const arananUrunler = urunler.find(urun=> urun.fiyat <=10000);
console.log(arananUrunler);
