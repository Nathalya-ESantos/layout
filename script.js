const colorPicker = document.querySelector('#color-picker');
const Fontselect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker= document.querySelector('#article-color-picker');
const body = document.querySelector('#body');
const newArticles = document.querySelector('#.news');


const loadPreferences = () => {
    // cor
    const savedColor = localStorage.getItem('primaryColor');

}

colorPicker.addEventListener('input', (e) => {
    const color = e.target.value;   //capturar o movimento do mouse
    //mudar o valor da variavel no CSS, com o valor capturado
    document.documentElement.style.setProperty('--primary-color', color)

    //inserir a chave(primaryColor) e o valor(color) no local storage
    localStorage.setItem('primaryColor', color);

});

articleColorPicker.addEventListener('input', (e) => {

});

Fontselect.addEventListener('change', (e) => {

});

themeToggle.addEventListener('click', () => {

});