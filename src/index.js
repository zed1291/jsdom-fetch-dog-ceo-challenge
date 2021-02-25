console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {

    function fetchImg() {
        fetch("https://dog.ceo/api/breeds/image/random/4")

        .then(function(response) {
            return response.json()
        })
        .then(function(json){
            renderImages(json.message)
        })
    }

    function renderImages(imgages) {
        imgages.forEach(image => {
            let list = document.createElement('ul')
            list.innerHTML = `<img src="${image}\" alt=\"Image of a dog\">`
            document.getElementById('dog-image-container').appendChild(list)
        })
    }

    function fetchBreed() {
        fetch('https://dog.ceo/api/breeds/list/all')

        .then(function(response) {
            return response.json()
        })
        .then(function(json){
            // console.log(json)
            renderBreeds(json.message)
        })

    }

    function renderBreeds(breeds) {

        let breedList = document.getElementById('dog-breeds')
        for (let key in breeds) {
            let breed = document.createElement('li')
            breed.innerText = key
            breedList.appendChild(breed)
            }
    }

    fetchImg()
    fetchBreed()

    document.addEventListener('click', e => {
        if (e.target.innerHTML.length > 0 && e.target.innerHTML.length < 25 ) {
            e.target.style.color = 'magenta'
        }
    })

})  