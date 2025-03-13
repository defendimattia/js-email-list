
const genEmails = []


const source = "https://flynn.boolean.careers/exercises/api/random/mail"

axios.get(source)
    .then(response => {
        genEmails.push(response.data.response)
    })
    .catch(error => {
        console.error(error)
    })