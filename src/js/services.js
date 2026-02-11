async function fetchGitHubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)

        if (!response.ok) {
            if (response.status === 404) throw new Error('Usuário não encontrado')
            throw new Error('Não foi possível acessar a API')
        } 

        const userData = await response.json()
        
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=created`)
        
        if (!reposResponse.ok) {
            throw new Error('Não foi possível buscar os repositórios')
        }

        const reposData = await reposResponse.json()

        return {
            name: userData.name ?? userData.login,
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