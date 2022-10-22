import home from './pages/home.js';
import category from './pages/category.js';
import product from './pages/product.js';
import employee from './pages/employee.js';
import client from './pages/client.js';
import provider from './pages/provider.js';
import inventary from './pages/inventary.js';
import invoice from './pages/invoice.js';



export default function pageInit(route){
    switch(route){
        case 'product': product(); break; 
        case 'category': category(); break;
        case 'employee': employee(); break;
        case 'client': client(); break;
        case 'home': home(); break;
        case 'invoice': invoice(); break;
        case 'inventary': inventary(); break;
        case 'provider': provider(); break;
    }
}









