const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
    resultInput.value = ''
    resultInput.classList.remove('error')
})

input.addEventListener('keydown', function (ev){
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
})
document.getElementById('operatorEqual').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERRO'
    resultInput.classList.add('error')
    const result = eval(input.value)
    console.log(result)
    if (result === undefined){
        resultInput.value = ''
        resultInput.classList.remove('error')
    } else {
    resultInput.value = result
    resultInput.classList.remove('error')}
}

document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copiar') {
        button.innerText = 'Copiado!'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copiar'
        button.classList.remove('success')
    }
})

main.dataset.theme = 'light'
document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#000')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f4f4f4')
        root.style.setProperty('--primary-color', '#333')
        root.style.setProperty('--secondary-color', '#ff9f0a')
        root.style.setProperty('--success', '#4dff91')
        
        main.dataset.theme = 'ligth'
    } else {
        root.style.setProperty('--bg-color', '#c2e2fe')
        root.style.setProperty('--border-color', '#adcaec')
        root.style.setProperty('--font-color', '#15092a')
        root.style.setProperty('--primary-color', '#b3cdfe')
        root.style.setProperty('--secondary-color', '#555f71')
        root.style.setProperty('--success', '#2872b3')
        main.dataset.theme = 'dark'
    }
})