var category_list = [

]

var init = {
    method:'get',
    headers:{
        'Authorization':'Bearer'+localStorage.getItem('token')
    },
    mode:'cors'

}



function allEvent(){

    const button_category = document.querySelector('.dg-btn-category');
    const btn_remove_category = document.querySelectorAll('.dg-btn_remove_cat');

    button_category.addEventListener('click',addCategory)
    btn_remove_category.forEach(button=>{
        button.addEventListener('click',removeCategory)
    })
}

async function addCategory(){
    var category_name = document.querySelector('#category_name')
    let initParam = {...init}
    let data = { name:category_name.value,user_id:5}

    initParam.method = 'post'
    initParam.body = JSON.stringify(data);
    initParam.headers['Content-Type'] ='aplication/json' 
    console.log(initParam)
    
    try{
        let response = await fetch('http://127.0.0.1:8000/api/categories',initParam)
            response = await response.json()
            category_name.value = ''
            fetchData()
           
    }catch(err){
        console.log(err)
    }
}

function removeCategory(event){
    var new_category = [];
    let id =event.target.querySelector('input').value
    console.log(id)
   
    category_list.forEach(category=>{

        if(category.id != id){
            new_category.push(category)
        }
    })
    console.log(new_category)
    category_list = new_category;

    categoryTemplate()
    

}

async function fetchData(){
    var response;
    
    try{
        response = await fetch('http://127.0.0.1:8000/api/categories',init)
        response = await response.json();
        
        categoryTemplate(response)
    }catch(err){
        console.log(err)
    }
        //response = await response.json();
    
    
}


function categoryTemplate(data){
    
    category_list = data!=null?data.reverse():[]
    //console.log(category_list)
    let category_table = document.querySelector('.category_list')
    let template_data = '';

    if(category_list != null){
        category_list.forEach(category=>{
            template_data += `
            <div class="dg-table-body dg-table-row">
                <span class="dg-table-head-iten ">#${category.id}</span>
                <span class="dg-table-head-iten">${category.name}</span>
                <span class="dg-table-head-iten dg-table-head-iten_action">
                    <button class="dg-table_button dg-btn_remove_cat" >
                        <i class="fa fa-close"></i>
                        <input type="hidden" name="categoryid" value="${category.id}">
                    </button>
                </span>
            </div>
            `
        })
    }else{
        category_table.innerHTML = `<p>Sem categoria</p>`
    }
    category_table.innerHTML = template_data;
    
}

export default function categoryPage(){
    categoryTemplate()
    allEvent()
    fetchData()
    
 }

