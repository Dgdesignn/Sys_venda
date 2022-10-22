var employee_list = [
    {name:"Manuel Cândido", bi:'439380LA032', phone:'938 235 232', email:'manu@sys.com', type:'gerente', status:'on'},
    {name:"Wilson Ventura", bi:'231280LA032', phone:'921 005 452', email:'wilson@sys.com', type:'gerente', status:'of'},
    {name:"Aguiar Branco", bi:'112080LA032', phone:'932 145 292', email:'aguiar@sys.com', type:'caixa', status:'on'},
    {name:"Tiago Tiago", bi:'412380LA032', phone:'922 335 932', email:'tiago@sys.com', type:'caixa', status:'on'},
    {name:"Taylor Smith", bi:'121180LA032', phone:'919 113 132', email:'smith@sys.com', type:'administrador', status:'on'},
    {name:"Álvaro Panzo", bi:'333380LA032', phone:'954 233 112', email:'alvaro@sys.com', type:'gerente', status:'of'},
]

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

function addEmployee(){
    const name = document.querySelector('#e_name').value
    const bi = document.querySelector('#e_bi_number').value
    const phone = document.querySelector('#e_phone').value
    const email = document.querySelector('#e_email').value
    const type = document.querySelector('#e_type').value
    const status = document.querySelector('#e_status').value

    const employee = {name, bi, phone, email, type, status}

    employee_list.push(employee)
    
    employeeTemplate()

    modal_main.classList.remove('active-modal')
    content_modal.classList.remove('active-modal-content')
}


//employee teamplate
function employeeTemplate(){
    const e_table = document.querySelector('.dg-table-list')
    let template = ''

    employee_list.forEach(employee=>{
        template += `
            <div class="dg-table-body dg-table-row">
                <span class="dg-table-head-iten "># ${employee.bi}</span>
                <span class="dg-table-head-iten ">${employee.name}</span>
                
                <span class="dg-table-head-iten"> +224 ${employee.phone}</span>
                <span class="dg-table-head-iten">${employee.email}</span>
                <span class="dg-table-head-iten"> ${employee.type}</span>
                <span class="dg-table-head-iten"> <label class="${employee.status=='of'?'rad-alert':'green-alert'}">${employee.status}</label></span>
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

 }
