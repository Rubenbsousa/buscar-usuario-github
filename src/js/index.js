import { fetchGitHubUser } from './services.js'
import { mostrarUsuario } from './screen.js'

const inputSearch = document.querySelector('#input-search')
const buttonSearch = document.querySelector('#btn-search')

buttonSearch.addEventListener('click', async () => {
    const username = inputSearch.value.trim()
    if (!username) return alert('Preencha o campo com o nome do usuário do GitHub')
    const user = await fetchGitHubUser(username)
    if (user) {
        mostrarUsuario(user)
    } else {
        alert('Usuário não encontrado ou erro na busca.')
    }
})