var client_list = [
    {id:1, name:'Lucas Bengui', tel:'94637722',address:'Luanda/Viana/Zango',status:'on'},
    {id:2, name:'Dominguês Francisco', tel:'92431122',address:'Luanda/Cacuaco/Ponte Azul',status:'on'},
    {id:3, name:'Engraça Bento', tel:'944007722',address:'Bengo/Dande/Capari',status:'of'},
    {id:4, name:'Mauricio Miguel', tel:'92437722',address:'Luanda/Cazenga/Cuca/tanque',status:'of'},
    {id:5, name:'Sílvio Thone', tel:'92639132',address:'Luanda/Sambizanga/São Paulo/Pumangol',status:'on'}
]


function clientEvent(){
    const modal_button = document.querySelector('.dg-active-modal')
    const modal_main = document.querySelector('.dg-modal')
    const close_modal = document.querySelector('.dg-modal .dg-close-modal')
    const content_modal = document.querySelector('.dg-modal .dg-modal-content')
    const cl_button = document.querySelector('#cl_btn_add')



    
    modal_button.addEventListener('click',()=>{
        modal_main.classList.add('active-modal')
        content_modal.classList.add('active-modal-content')
    })

    close_modal.addEventListener('click',()=>{
        modal_main.classList.remove('active-modal')
        content_modal.classList.remove('active-modal-content')

    })

   cl_button.addEventListener('click',addClient)
}


function addClient(){
    const name = document.querySelector('#cl_name').value
    const tel = document.querySelector('#cl_number').value
    const address = document.querySelector('#cl_address').value
    const status = document.querySelector('#cl_status').value

    var provider = {id:client_list.length+1,name,tel,address,status}

    client_list.push(provider)

    clientTemplate()
    modal_main.classList.remove('active-modal')
    content_modal.classList.remove('active-modal-content')
    
}


function clientTemplate(){
    var cl_table = document.querySelector('.dg-table-list')
    let template = ''

    client_list.forEach(client=>{
        template +=`

        <div class="dg-table-body dg-table-row">
                <span class="dg-table-head-iten "># ${client.id}</span>
                <span class="dg-table-head-iten ">${client.name}</span>
                
                <span class="dg-table-head-iten"> +224 ${client.tel}</span>
                <span class="dg-table-head-iten"> ${client.address}</span>
                <span class="dg-table-head-iten"> <label class="${client.status=='of'?'rad-alert':'green-alert'}">${client.status}</label></span>
                <span class="dg-table-head-iten dg-table-head-iten_action">
                    <button class="dg-table_button" date-id="${client.id}">
                    <i class="far fa-file-text"></i>
                    </button>
                    <button class="dg-table_button" date-id="${client.id}">
                    <i class="fa fa-pencil"></i>
                    </button>
                    <button class="dg-table_button dg-table_button-remove" date-id="${client.id}">
                    <i class="fa fa-remove"></i>
                    </button>
                
                </span>
        </div>


        `
    })

    cl_table.innerHTML = template;
}


export default  function clientPage(){
    clientEvent()
    clientTemplate()
 }
