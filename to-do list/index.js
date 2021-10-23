var body = document.querySelector('body')
var button = document.querySelector('.slider')



const callbackfunc = (event) =>{
  body.classList.toggle('dark')
}

button.addEventListener('click', callbackfunc)