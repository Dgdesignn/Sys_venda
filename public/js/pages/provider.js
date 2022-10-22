var provide_list = [
    {id:1, name:'Lucas Bengui', tel:'94637722',address:'Luanda/Viana/Zango',status:'on'},
    {id:2, name:'Dominguês Francisco', tel:'92431122',address:'Luanda/Cacuaco/Ponte Azul',status:'on'},
    {id:3, name:'Engraça Bento', tel:'944007722',address:'Bengo/Dande/Capari',status:'of'},
    {id:4, name:'Mauricio Miguel', tel:'92437722',address:'Luanda/Cazenga/Cuca/tanque',status:'of'},
    {id:5, name:'Sílvio Thone', tel:'92639132',address:'Luanda/Sambizanga/São Paulo/Pumangol',status:'on'}
]


function providerEvent(){
    const modal_button = document.querySelector('.dg-active-modal')
    const modal_main = document.querySelector('.dg-modal')
    const close_modal = document.querySelector('.dg-modal .dg-close-modal')
    const content_modal = document.querySelector('.dg-modal .dg-modal-content')
    const from_modal = document.querySelector('.dg-from-modal');
    const prd_button = document.querySelector('#prd_btn_add')



    
    modal_button.addEventListener('click',()=>{
        modal_main.classList.add('active-modal')
        content_modal.classList.add('active-modal-content')
    })

    close_modal.addEventListener('click',()=>{
        modal_main.classList.remove('active-modal')
        content_modal.classList.remove('active-modal-content')

    })

   prd_button.addEventListener('click',addProvider)
}


function addProvider(){
    const name = document.querySelector('#prd_name').value
    const tel = document.querySelector('#prd_number').value
    const address = document.querySelector('#prd_address').value
    const status = document.querySelector('#prd_status').value

    var provider = {id:provide_list.length+1,name,tel,address,status}
    provide_list.push(provider)
    
    provideTemplate() 
    modal_main.classList.remove('active-modal')
    content_modal.classList.remove('active-modal-content')
}


function provideTemplate(){
    var prd_table = document.querySelector('.dg-table-list')
    let template = ''

    provide_list.forEach(provider=>{
        template +=`

        <div class="dg-table-body dg-table-row">
                <span class="dg-table-head-iten "># ${provider.id}</span>
                <span class="dg-table-head-iten ">${provider.name}</span>
                
                <span class="dg-table-head-iten"> +224 ${provider.tel}</span>
                <span class="dg-table-head-iten"> ${provider.address}</span>
                <span class="dg-table-head-iten"> <label class="${provider.status=='of'?'rad-alert':'green-alert'}">${provider.status}</label></span>
                <span class="dg-table-head-iten dg-table-head-iten_action">
                    <button class="dg-table_button" date-id="${provider.id}">
                    <i class="far fa-file-text"></i>
                    </button>
                    <button class="dg-table_button" date-id="${provider.id}">
                    <i class="fa fa-pencil"></i>
                    </button>
                    <button class="dg-table_button dg-table_button-remove" date-id="${provider.id}">
                    <i class="fa fa-remove"></i>
                    </button>
                
                </span>
        </div>


        `
    })

    prd_table.innerHTML = template;
}


export default  function providerPage(){
    providerEvent()
    provideTemplate()
 }
