
const ulElement = document.querySelector("ul")
const genEmails = []


const source = "https://flynn.boolean.careers/exercises/api/random/mail"


for (i = 0; i < 10; i++) {
    axios.get(source)
        .then(response => {
            genEmails.push(response.data.response)
        })
        .catch(error => {
            console.error(error)
        })
}


genEmails.forEach((email) => ulElement.innerHTML += `<li>${email}</li>`)
