import {login} from '../connection/yeto.js'

if((localStorage.getItem('token')!=null) && (localStorage.getItem('number_bi')!=null)){
    window.location.replace('http://127.0.0.1:5502/index.html');
}

const btn_login = document.querySelector('#dg-btn_loggin');
btn_login.addEventListener('click',auth);

async function auth(ev){
    ev.preventDefault();
   
    let auth_data = ifIsempty();
    if(auth_data!==true){
        console.log(await login(auth_data))
    }
    
}


function ifIsempty(){
    const alertText = document.querySelector('.alert-errot')
    const fieldsBorder = document.querySelectorAll('.dg-input-group')
    const number_bi = document.querySelector('#login').value
    const password = document.querySelector('#pass').value
    
    if(number_bi=='' && password ==''){
        fieldsBorder[0].classList.add('dg-border_alert')
        fieldsBorder[1].classList.add('dg-border_alert')
        alertText.textContent = 'Informe o número do bi e a senha de acesso'
    }else{
        if(number_bi==''){
            fieldsBorder[0].classList.add('dg-border_alert')
            alertText.textContent = 'informe o número do BI para fazer o login'

        }else{
            if(password ==''){
                fieldsBorder[1].classList.add('dg-border_alert')
                alertText.textContent = 'Digite a tua senha de acesso'
            }else{
                return {number_bi, password};
            }

        }
    }

    return true;

}