const searchField = document.querySelector('#search-field');
const searchButton = document.querySelector('#Search');

let defaultURL = 'https://www.google.com/search?q=';
let searchFieldContent = '';

searchButton.addEventListener("click", () => {
    searchFieldContent = searchField.value;
    let redirectURL = defaultURL + searchFieldContent;
    window.location.href = redirectURL;
})

searchField.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        searchFieldContent = searchField.value;
        let redirectURL = defaultURL + searchFieldContent;
        window.location.href = redirectURL;
    }
})