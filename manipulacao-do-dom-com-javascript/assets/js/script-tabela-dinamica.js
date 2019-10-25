const tabela = document.getElementById('tabela');
const btnAdd = document.getElementById('buttonAdd');
let start = 0;

function removeElement() {
    let btnRemove = document.getElementsByClassName('btnRemove');
    for (let index = 0; index < btnRemove.length; index++) {
        const btn = btnRemove[index];
        btn.addEventListener('click', async ()=>{
            const numero = btn.id.split('-')[1];
            console.log(numero)
            const tr = await document.getElementById(`idTr-${numero}`);
            tr.remove();
        });   
    }
}

function addElemento(qtd) {
    for (let index = 0; index < qtd; index++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const buttonRemove = document.createElement('button');
        buttonRemove.innerText = 'x';
        buttonRemove.id = `idBtnRemove-${start}`;
        buttonRemove.className = 'btnRemove';
        td1.textContent = `${start}`;
        td2.textContent = `Nome: ${start}`;
        td3.appendChild(buttonRemove);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.id = `idTr-${start}`;
        tabela.appendChild(tr);
        start++;
    }
}

btnAdd.addEventListener('click', async ()=>{
    const qtd = document.getElementById('numero').value;
    await addElemento(qtd);
    removeElement();
});

