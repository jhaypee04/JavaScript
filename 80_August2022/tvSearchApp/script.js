// const url = `tvshows.json?q=${query}`
function searchShow(query){
    const url = `http://api.tvmaze.com/search/shows?q=${query}`
    fetch(url)
    .then(response => response.json())
    .then(result => renderResult(result))
    .catch(error => console.log(error.message))
}

function renderResult(result){
    let output = document.querySelector('.render-results')
    output.innerHTML = ''
    let show_names = result.map(element => element.show.name)
    show_names.forEach(names => {
        let list = document.createElement('li')
        list.innerHTML = names
        output.appendChild(list)
    })
}

window.onload = () => {
    let searchField = document.querySelector('#tvSearch')
    searchField.onkeyup = () =>{
        searchShow(searchField.value)
    }
}