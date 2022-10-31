var provide_list = []

var init = {
    method:'get',
    headers:{
        'Authorization':'Bearer'+localStorage.getItem('token')
    },
    mode:'cors'

}


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


function addProvider(e){
    e.providerEvent()
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


async function fecthData(){
    
    try {
        let response = await fetch('http://127.0.0.1:8000/api/providers', init); 
        response = await response.json(); 
        //console.log(response.data.results)  
        provideTemplate(response.data.results)
    } catch (error) {
        console.log(error)
    }
}



function provideTemplate(data){
    provide_list = data!=null?data.reverse():[]
    var prd_table = document.querySelector('.dg-table-list')
    let template = ''

    provide_list.forEach(provider=>{
        template +=`

        <div class="dg-table-body dg-table-row">
                <span class="dg-table-head-iten "># ${provider.id}</span>
                <span class="dg-table-head-iten ">${provider.name}</span>
                
                <span class="dg-table-head-iten"> +224 ${provider.tel}</span>
                <span class="dg-table-head-iten"> ${provider.adress}</span>
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
    fecthData()
    //provideTemplate()
 }
