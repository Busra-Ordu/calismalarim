const SUPABASE_URL = 'https://gtqzemifuyehyyovywuq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0cXplbWlmdXllaHl5b3Z5d3VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4OTkzNTEsImV4cCI6MjAzMDQ3NTM1MX0.5iniF2SipKOxuClvW0bdPstqo2smNAZ8p_q-IbnZXfE'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
const List = document.querySelector(".list");
const addUserForm = document.querySelector("#add-user-form");


async function getData(){
    const { data, error } = await _supabase.from('users').select()
    if(error){
        return [];
    }
    return data;
}


async function createTemplate(){
    const data = await getData();
    data.forEach(item => {
        List.innerHTML += `<li>${item.first_name} ${item.last_name} - ${item.email}</li>`
    })
}


async function createData(e){
    e.preventDefault();
    console.log("form kaydedildi");
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);
    console.log(formObj);
    const { error } = await _supabase.from('users').insert(formObj)
    if(error){
        if(error.code === "23505"){
            Swal.fire({
                title: 'Hata!',
                text: 'Böyle bir kayıt zaten var',
                icon: 'error',
                confirmButtonText: 'Anladım'
            })
        }
    }
}

addUserForm.addEventListener("submit", createData)

createTemplate();