const ilkSayi = document.querySelector("#ilkSayi");
const ikinciSayi = document.querySelector("#ikinciSayi");
const toplaBtn = document.querySelector("#topla");
const cikartBtn = document.querySelector("#cikart");
const sonucSpan = document.querySelector("#sonuc");

sonucSpan.style.display = "none";


function hesapla(x,y){
    const topla = x+y;
    const cikart = x-y;
    return {topla, cikart}
}


toplaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const ilkSayiDeger = ilkSayi.value;
    const ikinciSayiDeger = ikinciSayi.value;
    const {topla} = hesapla(Number(ilkSayiDeger), Number(ikinciSayiDeger))
    sonucSpan.textContent = topla
    sonucSpan.style.display = "block";
    
})


cikartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const ilkSayiDeger = ilkSayi.value;
    const ikinciSayiDeger = ikinciSayi.value;
    const {cikart} = hesapla(Number(ilkSayiDeger), Number(ikinciSayiDeger))
    sonucSpan.textContent = cikart
    sonucSpan.style.display = "block";
    
})

hesapla();

// function hesapla(a,b){
//     const topla = a+b;
//     const cikart = a-b;
//     return {topla, cikart}
// }


// toplaBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const ilkSayiDeger = ilkSayi.value;
//     const ikinciSayiDeger = ikinciSayi.value;
//     const {topla} = hesapla(Number(ilkSayiDeger), Number(ikinciSayiDeger))
//     sonucSpan.textContent = topla;
//     sonucSpan.style.display = "block";
//     setTimeout(() => {
//         sonucSpan.style.display = "none";
//     }, 5000);
// })

// cikartBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const ilkSayiDeger = ilkSayi.value;
//     const ikinciSayiDeger = ikinciSayi.value;
//     const {cikart} = hesapla(Number(ilkSayiDeger), Number(ikinciSayiDeger));
//     sonucSpan.textContent = cikart;
//     sonucSpan.style.display = "block";
//     setTimeout(() => {
//         sonucSpan.style.display = "none";
//     }, 5000);
// })