var employee_list = [
    {name:"Manuel Cândido", bi:'439380LA032', phone:'938 235 232', email:'manu@sys.com', type:'gerente', status:'on'},
    {name:"Wilson Ventura", bi:'231280LA032', phone:'921 005 452', email:'wilson@sys.com', type:'gerente', status:'of'},
    {name:"Aguiar Branco", bi:'112080LA032', phone:'932 145 292', email:'aguiar@sys.com', type:'caixa', status:'on'},
    {name:"Tiago Tiago", bi:'412380LA032', phone:'922 335 932', email:'tiago@sys.com', type:'caixa', status:'on'},
    {name:"Taylor Smith", bi:'121180LA032', phone:'919 113 132', email:'smith@sys.com', type:'administrador', status:'on'},
    {name:"Álvaro Panzo", bi:'333380LA032', phone:'954 233 112', email:'alvaro@sys.com', type:'gerente', status:'of'},
]

var init = {
    method:'get',
    headers:{
        'Authorization':'Bearer'+localStorage.getItem('token')
    },
    mode:'cors'

}


function employee_event(){
    const modal_button = document.querySelector('.dg-active-modal')
    const modal_main = document.querySelector('.dg-modal')
    const close_modal = document.querySelector('.dg-modal .dg-close-modal')
    const content_modal = document.querySelector('.dg-modal .dg-modal-content')
    const from_modal = document.querySelector('.dg-from-modal');
    const e_button = document.querySelector('#e_btn_add')


    
    modal_button.addEventListener('click',()=>{
        modal_main.classList.add('active-modal')
        content_modal.classList.add('active-modal-content')
    })

    close_modal.addEventListener('click',()=>{
        modal_main.classList.remove('active-modal')
        content_modal.classList.remove('active-modal-content')

    })

    e_button.addEventListener('click',addEmployee)


}

async function addEmployee(e){
    e.preventDefault();
    //alert('cadastrando')
    const name = document.querySelector('#e_name').value
    const number_bi = document.querySelector('#e_bi_number').value
    const phone_number = document.querySelector('#e_phone').value
    const email = document.querySelector('#e_email').value
    let level = document.querySelector('#e_type').value
    const password = document.querySelector('#e_password').value
    let status = document.querySelector('#e_status').value
    const content_modal = document.querySelector('.dg-modal .dg-modal-content')
    const modal_main = document.querySelector('.dg-modal')

    

    status = status=='on'?1:0;
    level = level=='administrador'?1:2;

    const employee = {number_bi, name, phone_number, email, password, level, status}

    createUser(employee)
    

    
    
    modal_main.classList.remove('active-modal')
    content_modal.classList.remove('active-modal-content')
}

async function createUser(data){
    const alert_action = document.querySelector('.alert-action')
    let response;
    let initParam = {...init}
    initParam.method = 'post'
    initParam.body = JSON.stringify(data);
    initParam.headers['Content-Type'] ='aplication/json' 
    console.log(initParam)
   
    try {
        response = await fetch('http://127.0.0.1:8000/api/auth/register',initParam)
        response = await response.json()
        if(response){
            alert_action.classList.add('shows-alert-message')
        }
    } catch (error) {
        console.log(error)
    }

    fecthData()

}

async function fecthData(){
    var response;
    
    try{
        response = await fetch('http://127.0.0.1:8000/api/users',init)
        console.log(response.statusText)
        response = await response.json();  
       employeeTemplate(response)
    }catch(err){
        console.log(err)
    }
}


//employee teamplate
function employeeTemplate(data){
    employee_list = data!=null?data.reverse():[]
    const e_table = document.querySelector('.dg-table-list')
    let template = ''

    employee_list.forEach(employee=>{
        template += `
            <div class="dg-table-body dg-table-row">
                <span class="dg-table-head-iten "># ${employee.number_bi}</span>
                <span class="dg-table-head-iten ">${employee.name}</span>
                
                <span class="dg-table-head-iten"> +224 ${employee.phone_number}</span>
                <span class="dg-table-head-iten">${employee.email}</span>
                <span class="dg-table-head-iten"> ${employee.level==1?'Admin':'Caixa'}</span>
                <span class="dg-table-head-iten"> <label class="${employee.status!=1?'rad-alert':'green-alert'}">${employee.status}</label></span>
                <span class="dg-table-head-iten dg-table-head-iten_action">
                    <button class="dg-table_button" date-id="${employee.bi}">
                    <i class="far fa-file-text"></i>
                    </button>
                    <button class="dg-table_button" date-id="${employee.bi}">
                    <i class="fa fa-pencil"></i>
                    </button>
                    <button class="dg-table_button dg-table_button-remove" date-id="${employee.bi}">
                    <i class="fa fa-remove"></i>
                    </button>
                
                </span>
            </div>
        `;   
    })

    e_table.innerHTML = template;
    
}


export default  function employeePage(){

    employee_event()
    employeeTemplate()
    fecthData()

 }
