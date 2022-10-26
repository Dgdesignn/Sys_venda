var result = '';
const myHeader = new Headers();


myHeader.append('Content-Type','aplication/json');



async function login(data){
    let init = {
        method:'POST',
        headers:myHeader,
        body: JSON.stringify(data),
        mode:'cors'
    }

    var response = await fetch('http://127.0.0.1:8000/api/auth/login',init);
    response =  await response.json();
    //console.log(response.access_token)
    setToken(response,data)
  
}

function setToken(token,data){
    if(token.access_token){
        localStorage.setItem('token',token.access_token)
        localStorage.setItem('number_bi',data.number_bi)
        window.location.replace('http://127.0.0.1:5502/index.html')
    }else{
        window.location.replace('http://127.0.0.1:5502/login.html')
    }
}



export {login} 