import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}

// Context/situaton #1
//we are running this file in devlopment in isolation
// which DEFNITELY has an element with an id of 'dev-products'
//we want to immediately render our app into that element

if(process.env.NODE_ENV ==='development'){

const el=document.querySelector("#dev-products");
//Assuming our container doent have an element
// with id "dev-products" .....
if(el){
    //we are probablu running in isolation 
    mount(el);
}
}
//contesxt/situaton #2
//we are running this file in devlopment or production
//throught the CONTAINER app
//No GUARANTEE that an element eit han id of dev-products' esixts
//we DO NOT Wat try to immediately render the app 

export {mount };