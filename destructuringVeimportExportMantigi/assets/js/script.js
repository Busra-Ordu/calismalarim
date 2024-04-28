function hesapla(a,b) {
    const topla=a+b;
    const carp=a*b;
    const bol=a/b;
    const cikart=a-b
    return[ topla , carp,bol,cikart]
}
const [topla,carp]=hesapla(1,2)
console.log(topla);
console.log(carp);

 
// ornek 2
function test({detay,renk}) {
    console.log(`${detay} ${renk}`); 
}
function init() {
    const bilgi={
    baslik:"bilgi test",
    detay:"detayy",
    renk:"kirmizi",
    boyut:150,
    adet:12
}
test(bilgi)
}
init()

// ornek 3
const ogrenciler=[
    {
        id:1,
        ad:"furkan ozay",
        yas:24
    },
    {
        id:2,
        ad:"busra ordu",
        yas:24
    },
    {
        id:3,
        ad:"zehra ecer",
        yas:27
    }

]

function ogrencininYasiniGetir({ad,yas,id}) {
    console.log(`ogrencinin adı ${ad} yası ${yas} ve sistemde kayıtlı kimlik numarası ${id}`);
}

ogrencininYasiniGetir(ogrenciler[2])

// ornek 4

 