const inputValue = document.getElementById('name')
const emailValue = document.getElementById('email')
const submitBtn = document.querySelector('button')

console.log(inputValue)
console.log(emailValue)
console.log(submitBtn)

submitBtn.addEventListener("click", ()=>{
    console.log(inputValue.value)
    console.log(emailValue.value)
    
    let obj = {
        name:inputValue.value,
        email:emailValue.value
    }
    console.log(obj)
    inputValue.value = ''
    emailValue.value = ''
})

// ==========> Form Practice

const form = document.querySelector('form')
console.log(form)


form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const data = new FormData(form)
    const keyValuePairs = Object.fromEntries(data.entries())
    console.log(keyValuePairs)
})