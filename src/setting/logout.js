
export default function logoutEvent(){
    const logout_button = document.querySelector('#dg-btn-logout')
    logout_button.addEventListener('click',logout)   
}


function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('number_bi')   
    location.reload(true)
}

