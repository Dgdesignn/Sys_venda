import pageInit from './public/js/pages.js';
import index from './src/setting/redirect.js';
import logout from './src/setting/logout.js';


index();
const page = document.querySelector('#dg-page')
const page_title =document.querySelector('title')
function alertMessage(){
    const e_btn_alert = document.querySelector('.close-alert-message')
    const alert_action = document.querySelector('.alert-action')
    e_btn_alert.addEventListener('click',()=>alert_action.classList.remove('shows-alert-message'))

}

//cada vez que o hash mudar chama a função initial
window.addEventListener('hashchange',initial)


//buscando o arquivo html com fetch
async function getRoute(route){
    let result,route_file;

    route_file = `/pages/${route}.html`;
    result = await fetch(route_file)
    return await result.text()
   
}

//verificar rota actual, 
//caso não tiver atribuir #home como rota padrão
function defaultHash(){
    if(!location.hash){
        location.hash = "#home"
    }
}

//marcar no menu a rota activa
function currentRoute(out_route){
    let routes = document.querySelectorAll('.dg-menu-itens a'),
    route_name;

    routes.forEach(route=>{
        route_name = route.getAttribute('href').substring(1)
        if(out_route === route_name){
            route.setAttribute('class','dg-current-page')
        }else{
            route.removeAttribute('class')
        }
            
    })
}

//função que chama todas as funções
async function initial(){
    let route = location.hash.substring(1)
    currentRoute(route)  
    page.innerHTML = await getRoute(route)
    page_title.textContent = route.toLocaleUpperCase();
    defaultHash()

    alertMessage()
    verifyToken()
    logout()
    pageInit(route) 
}

async function verifyToken(){
    let response;
    var init = {
        method:'get',
        headers:{
            'Authorization':'Bearer'+localStorage.getItem('token')
        },
        mode:'cors'
    
    }
    
    try{
        response = await fetch('http://127.0.0.1:8000/api/categories',init)
        response = await response.json();
        if(response.status){
            alert('O token expirou!')
            localStorage.removeItem('token')
            localStorage.removeItem('number_bi')   
            location.reload(true)
        }
   
    }catch(err){
        console.log(err)
    }
}




initial();
