const DomList = document.querySelector('.list');
const lista = ['pasta','riso','frutta','verdura','yogurt'];


let i = 0;
while(i < lista.length){

    let listElem = document.createElement('li');
    listElem.innerText = lista[i];
    DomList.append(listElem);
    DomList.classList.add('text-uppercase');
    i++;
}

