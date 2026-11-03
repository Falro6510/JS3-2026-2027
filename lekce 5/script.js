const list = document.getElementById('list')
const sample = document.getElementById('sample')
const clear = document.getElementById('clear')
const load = document.getElementById('load')
const many_done = document.getElementById('many_done')
const many_exist = document.getElementById('many_exist')
const create_task = document.getElementById('create_task')
let localdone = 0
// dodělat načtení
let done = 0
let exist = 0
let count = 1
let tasks = 0

sample.style.display = 'none'

if (localStorage.getItem('tasks') == null) {
localStorage.setItem('done' , done)
localStorage.setItem('exist' , exist)
localStorage.setItem('count' , count)
localStorage.setItem('tasks' , tasks)
}
function funkce(cnt) {
console.log(task_list)
task_list.forEach( (foreach_temp) => {
  let done_each = foreach_temp.querySelector('#done')
  console.log(foreach_temp)
  done_each.addEventListener('click' , () => {
    let text_each = foreach_temp.querySelector('#name')
    console.log('done')
    console.log(text_each)
    text_each.style.color = 'green'
    localStorage.setItem(cnt + 'done' , 1)





  })


})
;
}
clear.addEventListener('click' , () => {localStorage.clear();})

load.addEventListener('click' , () => {
  if (localStorage.getItem('tasks') !== null){
  tasks = parseInt(localStorage.getItem('tasks'))
  done = parseInt(localStorage.getItem('done'))
  count = parseInt(localStorage.getItem('count'))
  i = 1 
    while (i < count+1) {
    list.innerText = ''
    let clone = sample.cloneNode(true)
    clone.id = 'task' + i
    let name = clone.querySelector('#name')
    name.innerText = localStorage.getItem(i)
    ifdone = localStorage.getItem(i + 'done')
    clone.style.display = 'block'
    if (ifdone == 1) {clone.style.color = 'green';}
    list.appendChild(clone)
    funkce(count)
    i++

    }
  }


})
create_task.addEventListener('click' , () => {
  let text = prompt('Jméno úkolu')
  clone = sample.cloneNode(true)
  clone.id = 'task' + count
  let name = clone.querySelector('#name')
  name.innerText = text
  clone.style.display = 'block'
  list.appendChild(clone)
  let temp =  document.getElementById('task' + count)
  task_list.push(temp)
  localStorage.setItem(count , name.innerText)
  localStorage.setItem(count + 'done' , 0)
  funkce(count)
  count += 1

})

