const SUPABASE_URL = 'https://gtqzemifuyehyyovywuq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0cXplbWlmdXllaHl5b3Z5d3VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4OTkzNTEsImV4cCI6MjAzMDQ3NTM1MX0.5iniF2SipKOxuClvW0bdPstqo2smNAZ8p_q-IbnZXfE'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
console.log(_supabase);

const ogrenciler= document.querySelector("#ogrenciler")


ogrenciler.addEventListener("submit",async function(e) {
    e.preventDefault();
    const datas= new FormData(this)
    const formObject= {}
    for (const [key,value] of datas.entries()) {
        formObject[key]=value
    }
    
    try{
        const { data, error } = await _supabase
    .from('ogrenciler')
    .insert([
        { İsim: formObject.ilk_isim, soyİsim: formObject.soy_isim, ogrenci_no:formObject.ogrenci_no },
    ])
    .select()
    console.log('Kayıt başarılı:', data);

}
catch{
    console.error('Kayıt hatası:', error.message);
}
})

