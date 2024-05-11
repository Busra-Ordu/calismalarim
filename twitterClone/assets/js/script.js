const SUPABASE_URL = 'https://gtqzemifuyehyyovywuq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0cXplbWlmdXllaHl5b3Z5d3VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4OTkzNTEsImV4cCI6MjAzMDQ3NTM1MX0.5iniF2SipKOxuClvW0bdPstqo2smNAZ8p_q-IbnZXfE'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// console.log(_supabase);

const usersForm= document.querySelector("#add-user-form")


usersForm.addEventListener("submit",addUsersForm);

async function addUsersForm(e) {
    e.preventDefault();
    const formData= Object.fromEntries(new FormData(e.target));
    
    const { data, error } = await _supabase
    .from('users')
    .insert([
    {name: formData.first_name, surname: formData.last_name,email:formData.email },
    ])
    .select();
    
    let { data: users, error:dataError } = await _supabase
    .from('users')
    .select('*');
    console.log(users);

        
}