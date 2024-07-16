export default function () {
    const main = document.querySelector('main')
    const root = document.querySelector(':root')

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
}