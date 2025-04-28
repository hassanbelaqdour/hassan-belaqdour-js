const form = document.getElementById('formulaire');
const title = document.querySelector('input[type="text"]');
const statut = document.querySelector('select[name="choix"]');
const doing = document.getElementById('doing');
const done = document.getElementById('done');

let id =0;
form.addEventListener('submit', (e)=>{
    id++;
    e.preventDefault();
    const div = document.createElement('div');
    div.id=id;
    if(statut.value == 'doing'){
        div.innerHTML = ` 
        ${title.value} 
        <button  onclick="delet(${id})" class="mx-2">delet</button>
        <button class="mx-2">edit</button>
        `
        doing.appendChild(div)
    }else{
        div.innerHTML = ` 
        ${title.value} 
        <button onclick="delet(${id})" class="mx-2">delet</button>
        <button class="mx-2">edit</button>
        `
        done.appendChild(div)
    }

})

function delet(id){
    document.getElementById(id).remove()
}


 



