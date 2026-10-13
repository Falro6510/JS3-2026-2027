localStorage;
sessionStorage
// localStorage uklada i pri ukonceni session, sessionStorage const 
//
// localStorage.clear()


let btn = document.querySelector('#btn')
let txt = document.querySelector('#txt')
txt.innerText = localStorage.val

btn.addEventListener('click' , () => {

x = +localStorage.val
x += 1 
txt.innerText = x
localStorage.setItem('val' , x)

})
