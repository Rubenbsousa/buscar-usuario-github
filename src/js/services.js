const BASE_URL = 'https://api.github.com/users'
const REPOS_QUANTITY = 10

/**
 * Busca os dados do usuário e seus repositórios na API do GitHub.
 * @param {string} username - O nome de usuário do GitHub.
 * @returns {Promise<Object|null>} Retorna um objeto com dados do usuário ou null em caso de erro.
 */
async function fetchGitHubUser(username) {
    try {
        // Busca dados do perfil
        const response = await fetch(`${BASE_URL}/${username}`)

        if (!response.ok) {
            if (response.status === 404) throw new Error('Usuário não encontrado')
            throw new Error('Não foi possível acessar a API')
        } 

        const userData = await response.json()
        
        // Busca repositórios recentes
        const reposResponse = await fetch(`${BASE_URL}/${username}/repos?per_page=${REPOS_QUANTITY}&sort=created`)
        
        if (!reposResponse.ok) {
            throw new Error('Não foi possível buscar os repositórios')
        }

        const reposData = await reposResponse.json()

        return {
            name: userData.name ?? userData.login,
            bio: userData.bio,
            avatar: userData.avatar_url,
            followers: userData.followers,
            following: userData.following,
            repositories: reposData
        }
    } catch (error) {
        console.error(error)
        return null
    }
}

export { fetchGitHubUser }