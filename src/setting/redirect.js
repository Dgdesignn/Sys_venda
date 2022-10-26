

function goTo(){
    if((localStorage.getItem('token')==null) && (localStorage.getItem('number_bi')==null)){
        window.location.replace('http://127.0.0.1:5502/login.html');
    }
}


export default function index(){
    goTo()
}