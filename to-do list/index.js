/**------dark-mode------ */

var body = document.querySelector('body')
var button = document.querySelector('.slider')



const callbackfunc = (event) =>{
  body.classList.toggle('dark')
}

button.addEventListener('click', callbackfunc)


/**-----add-task------ */
var chores =[]

var button = document.querySelector('.add_button')
var input = document.querySelector('.input__task')
var list = document.querySelector('ul')

const add = (event) => {
  const inputValue = input.value
  if(chores.includes(inputValue)){
    alert(`"${inputValue}" already exists`)
  }

  else if (input.value == "") {
    alert(`task cannot be blank`)
  }

  else{
    chores.push(inputValue)
    const element = document.createElement('li')
    const textNode = document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)

  }
}

// const callbackfunc1 = (event) => {
//   const inputValue = input.value
//   const element = document.createElement('li')
//   const textNode = document.createTextNode(inputValue)
//   element.appendChild(textNode)
//   list.appendChild(element)
// }



button.addEventListener('click', add)

/** ----- CLEAR----- */
var button1 = document.querySelector('.clear')

const clearAll =  (event) =>{
  const remove =  list.remove()
}
button1.addEventListener('click', clearAll)

/** -----all task----- */

/** ----completed----- */

/** ----pending----- */

/** ----deleteOne---- */

/** ----checkbox---- */
