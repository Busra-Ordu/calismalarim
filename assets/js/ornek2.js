// const dizi = Array.from({length: 5});
// console.log(dizi);

// const yeniDizi = dizi.map((eleman, index) => eleman = index + 1)

// console.log(yeniDizi);



// const dizi = [10, "Furkan", "Frontend Sınıfı", true, "Furkan"];

// const yeniEleman = dizi.filter(eleman => eleman == "Furkan")

// console.log(yeniEleman);

// const yeniDizi = dizi.map(eleman => eleman = "Artık hepsi böyle oldu");

// console.log(yeniDizi);


// const urunler = [
//     {
//         adi: "Bilgisayar",
//         fiyat: 38000
//     },
//     {
//         adi: "Ayakkabı",
//         fiyat: 5000
//     },
//     {
//         adi: "Telefon",
//         fiyat: 9000
//     }
// ]

// const arananUrunler = urunler.find(urun => urun.fiyat <= 10000);

// console.log(arananUrunler);

const studentBtns = document.querySelector(".studentBtns")
const studentBtns2 = document.querySelector(".studentBtns2")
const studentBtns3 = document.querySelector(".studentBtns3")
const studentDiv = document.querySelector(".studentDiv")

async function getData(){
    const request = await fetch("/assets/json/data.json");
    const data = await request.json();
    return data;
}

// const data = await getData();
// console.log(data);
// getData();

const date= new Date();
yas: date.getFullYear() - ogrenci.dogumYili
    


async function init(){
    const data = await getData();
    const bigStudents = data.ogrenciler.filter(ogrenci => ogrenci.yas > 22)
    const smallStudents = data.ogrenciler.filter(ogrenci => ogrenci.yas <22)
    
    // const gelenOgrenciler = data.ogrenciler.map(ogrenci).filter()

    studentBtns.addEventListener("click", function(e){
        e.preventDefault()
        studentDiv.innerHTML = "";
        bigStudents.forEach(student => {
            studentDiv.innerHTML += `
                    <h2>${student.adiSoyadi}</h2>
            `
        });
    })

    studentBtns2.addEventListener("click", function(e){
        e.preventDefault()
        studentDiv.innerHTML = "";
        for (const student of smallStudents) {
            studentDiv.innerHTML += `
                <h2>${student.adiSoyadi}</h2>
            `
        }
    })

    studentBtns3.addEventListener("click", function(e){
        e.preventDefault()
        studentDiv.innerHTML = "";
        if(equalStudents.length > 0){
            for (const student of equalStudents) {
                studentDiv.innerHTML += `
                    <h2>${student.adiSoyadi}</h2>
                `
            }
        }else{
            studentDiv.innerHTML = `<h1>Böyle bir öğrenci yok birader</h1>`
        }
    })

}


init();
