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

function addCategory(){
    var category_name = document.querySelector('#category_name')
    let new_element = {id:category_list.length+1, name:category_name.value}
    

    category_list.push(new_element);
    categoryTemplate()
    category_name.value='';
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

async function fetchData(data=null){
    var response;
    if(data==null){
        response = await fetch('http://127.0.0.1:8000/api/categories',init)
        response = await response.json();
        categoryTemplate(response)
    }
    
}


function categoryTemplate(data=null){
    console.log(data)
    category_list = data!=null?data:[]
    let category_table = document.querySelector('.category_list')
    let template_data = '';

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

    category_table.innerHTML = template_data;
    
}

export default function categoryPage(){
    categoryTemplate()
    allEvent()
    fetchData()
    
 }

