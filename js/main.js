
const ulElement = document.querySelector("ul")
const genEmails = []


const source = "https://flynn.boolean.careers/exercises/api/random/mail"


for (i = 0; i < 10; i++) {
    axios.get(source)
        .then(response => {
            ulElement.innerHTML += `<li>${response.data.response}</li>`
        })
        .catch(error => {
            console.error(error)
        })
}


