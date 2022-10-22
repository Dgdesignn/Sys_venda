

var product_list = [
    {
        id:12,
        name:"PS5",
        qtd_max:100,
        qtd_min:12,
        qtd_act:67,
        price_in:'450.320,00',
        price_out:'750.500,00',
        category:'Game',
        desc:'PS5, cor branca, 1T de armazenamento',
        date_in:'17/10/2022',
        status:1,
        provider:'Henrique Ventura'
    },
    {
        id:13,
        name:"Maquina de lavar",
        qtd_max:50,
        qtd_min:12,
        qtd_act:33,
        price_in:'90.00,00',
        price_out:'150.500,00',
        category:'Eletrodoméstico',
        desc:'Maquina da LG, 100 voltas por minuto, corpo de metal.',
        date_in:'11/10/2022',
        status:1,
        provider:'Dagnaldo Alexandre'
    },
    {
        id:14,
        name:"SmartTv",
        qtd_max:10,
        qtd_min:3,
        qtd_act:6,
        price_in:'250.320,00',
        price_out:'310.000,00',
        category:'Eletrodoméstico',
        desc:'Tv de 56 polegadas, Marca LG, Tela de retina',
        date_in:'17/10/2022',
        status:1,
        provider:'Dagnaldo Alexandre'
    }
];



 function allEvents(){
    const modal_button = document.querySelector('.dg-active-modal')
    const modal_main = document.querySelector('.dg-modal')
    const close_modal = document.querySelector('.dg-modal .dg-close-modal')
    const content_modal = document.querySelector('.dg-modal .dg-modal-content')
    const from_modal = document.querySelector('.dg-from-modal');
    const from_modal_nex = document.querySelector('.dg-from-modal .dg-next-button');
    const from_modal_prev = document.querySelector('.dg-from-modal .dg-prev-button');
    const from_modal_fin = document.querySelector('.dg-from-modal .dg-finish-button');

    const form_add_product = document.querySelector('#form_product');


    modal_button.addEventListener('click',()=>{
        modal_main.classList.add('active-modal')
        content_modal.classList.add('active-modal-content')
    })

    close_modal.addEventListener('click',()=>{
        modal_main.classList.remove('active-modal')
        content_modal.classList.remove('active-modal-content')

    })

    from_modal_nex.addEventListener('click',()=>{
        from_modal.classList.add('dg-next-2')
    })
    from_modal_prev.addEventListener('click',()=>{
        from_modal.classList.remove('dg-next-2')
    })

    from_modal_fin.addEventListener('click',addProduct)

}

function uuid() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}



function addProduct(){
    
        //form data
        let name = document.querySelector('#product_name').value
        let category = document.querySelector('#dg_product_categ').value
        let provider = document.querySelector('#dg_provider_product').value
        let date_in = document.querySelector('#date_in').value
        let status = document.querySelector('#status').value
        let price_in = document.querySelector('#price_in').value
        let price_out = document.querySelector('#price_out').value
        let qtd_min = document.querySelector('#qtd_min').value
        let qtd_max = document.querySelector('#qtd_max').value
        let desc = document.querySelector('#dg_desc').value
        
        const modal_main = document.querySelector('.dg-modal')
        const content_modal = document.querySelector('.dg-modal .dg-modal-content')
        const from_modal = document.querySelector('.dg-from-modal');
        

    
        const data = {id:uuid(),name,category, provider, date_in, status, price_in, price_out, qtd_min, qtd_max, desc}
       
        product_list.push(data) 
        productList()

        document.querySelector('#product_name').value=''
        document.querySelector('#dg_product_categ').value=''
        document.querySelector('#dg_provider_product').value=''
        document.querySelector('#date_in').value=''
        document.querySelector('#status').value=''
        document.querySelector('#price_in').value=''
        document.querySelector('#price_out').value=''
        document.querySelector('#qtd_min').value=''
        document.querySelector('#qtd_max').value=''
        document.querySelector('#dg_desc').value=''
        
        modal_main.classList.remove('active-modal')
        content_modal.classList.remove('active-modal-content')
        from_modal.classList.remove('dg-next-2')
   
}


//data table template
function productList(){
    const table_list = document.querySelector('.dg-table-list')
    let table_template = ''


    product_list.forEach(product=>{

        table_template +=`
        <div class="dg-table-body dg-table-row">
        <span class="dg-table-head-iten ">#${product.id}</span>
        <p  class="dg-table-head-iten">
             <span class="dg-label_blue">${product.name}</span>
             <span class="dg-label_gray">${product.date_in}</span>
        </p>
        <span class="dg-table-head-iten"> <label class="rad-alert">${product.qtd_min}</label></span>
        <span class="dg-table-head-iten"><label class="green-alert">${product.qtd_max}</label></span>
        <span class="dg-table-head-iten"><label class="green-alert">${product.qtd_act}</label></span>
        <span class="dg-table-head-iten">${product.price_in}Kz</span>
        <span class="dg-table-head-iten">${product.price_out}Kz</span>
        <span class="dg-table-head-iten">${product.provider}</span>
        <span class="dg-table-head-iten dg-table-head-iten_action">
            <button class="dg-table_button" date-id="${product.id}">
               <i class="far fa-file-text"></i>
            </button>
            <button class="dg-table_button" date-id="${product.id}">
               <i class="fa fa-pencil"></i>
            </button>
            <button class="dg-table_button dg-table_button-remove" date-id="${product.id}">
               <i class="fa fa-remove"></i>
            </button>
          
        </span>
    </div>
        `

    })


    table_list.innerHTML = table_template
}


export default  function productPage(){

    allEvents()
    productList()
   
}


