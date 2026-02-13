import { fetchGitHubUser } from './services.js'
import { mostrarUsuario, mostrarErro } from './screen.js'

const inputSearch = document.querySelector('#input-search')
const buttonSearch = document.querySelector('#btn-search')

/**
 * Função principal que orquestra a busca e exibição dos dados.
 */
async function handleSearch() {
    const username = inputSearch.value.trim()
    if (!username) return mostrarErro('Preencha o campo com o nome do usuário do GitHub')
    const user = await fetchGitHubUser(username)
    if (user) {
        mostrarUsuario(user)
    } else {
        mostrarErro('Usuário não encontrado ou erro na busca.')
    }
}

// Evento de clique no botão
buttonSearch.addEventListener('click', handleSearch)

// Evento de tecla 'Enter' no input
inputSearch.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        handleSearch()
    }
})