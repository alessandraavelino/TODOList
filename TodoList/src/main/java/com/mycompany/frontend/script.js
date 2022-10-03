const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const nomeForm = document.querySelector('#nomeForm')
const descForm= document.querySelector('#descForm')
const dataForm = document.querySelector('#dataForm')
const priorForm = document.querySelector('#priorForm')
const categForm = document.querySelector('#categForm')
const statusForm = document.querySelector('#statusForm')

const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    nomeForm.value = itens[index].nome
    descForm.value = itens[index].descricao
    dataForm.value = itens[index].datat
    priorForm.value = itens[index].prioridade
    categForm.value = itens[index].categoria
    statusForm.value = itens[index].status

    id = index
  } else {
    nomeForm.value = ''
    descForm.value = ''
    dataForm.value = ''
    priorForm.value = ''
    categForm.value = ''
    statusForm.value = ''
    
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.descricao}</td>
    <td>${item.datat}</td>
    <td>${item.prioridade}</td>
    <td>${item.categoria}</td>
    <td>${item.status}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (nomeForm.value == '' || descForm.value == '' || dataForm.value == '' || priorForm.value == '' ||  categForm.value == '' || statusForm == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = nomeForm.value
    itens[id].descricao = descForm.value
    itens[id].datat = dataForm.value
    itens[id].prioridade = priorForm.value
    itens[id].categoria = categForm.value
    itens[id].status = statusForm.value
  } else {
    itens.push({'nome': nomeForm.value, 'descricao': descForm.value, 'datat': dataForm.value, 'prioridade': priorForm.value, 'categoria': categForm.value, 'status': statusForm.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()