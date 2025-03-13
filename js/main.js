
const ulElement = document.querySelector("ul")
const buttonElement = document.querySelector("button")


const source = "https://flynn.boolean.careers/exercises/api/random/mail"


for (i = 0; i < 10; i++) {
    axios.get(source)
        .then(response => {
            ulElement.innerHTML += ` <li class="list-group-item">${response.data.response}</li>`
        })
        .catch(error => {
            console.error(error)
        })
}


buttonElement.addEventListener("click", (event) => {

    ulElement.innerHTML = ""
    
    for (i = 0; i < 10; i++) {
        axios.get(source)
            .then(response => {
                ulElement.innerHTML += ` <li class="list-group-item">${response.data.response}</li>`
            })
            .catch(error => {
                console.error(error)
            })
    }
});