const ramky = document.querySelector('#ramky')
const notebook = document.querySelector('#notebook')
const googlebook = document.querySelector('#googlebook')
const div = document.querySelector('#bin')
const sample = document.querySelector('#sample')
let count = 1
sample.style.display = 'none'

function save(item) {
localStorage.setItem(count , item)
let clone = sample.cloneNode(true);
clone.id = count
 let tt = '#' + item.id + 'txt'
let tp = document.querySelector(tt)
console.log(tt)
clone.innerText = tp.innerText
div.appendChild(clone);
clone.style.display = 'block'
count ++

}




let items = [ramky, notebook, googlebook]
items.forEach((element) => {
console.log(element)
element.addEventListener('click' , () => {
save(element)  })})
localStorage.setItem('items' , items.length)

