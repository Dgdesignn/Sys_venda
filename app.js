import pageInit from './public/js/pages.js';
import index from './src/setting/redirect.js';
import logout from './src/setting/logout.js';


index();
const page = document.querySelector('#dg-page')
const page_title =document.querySelector('title')

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

    logout()
    pageInit(route)
    
}




initial();
