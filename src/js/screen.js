const userInfo = document.querySelector('#profile-results')

/**
 * Renderiza as informações do usuário e seus repositórios na tela.
 * @param {Object} user - Objeto contendo os dados do usuário.
 */
function mostrarUsuario(user) {
    userInfo.innerHTML = `
        ${renderUserProfile(user)}
        ${renderUserRepositories(user.repositories)}`
}

/**
 * Gera o HTML do perfil do usuário.
 * @param {Object} user 
 * @returns {string} HTML string
 */
function renderUserProfile(user) {
    return `
        <div class="profile-data">
            <img src="${user.avatar}" alt="Foto de perfil">
            <div class="profile-info">
            <h2>${user.name}</h2>
            <p>${user.bio ?? 'Sem descrição'}</p> </div>
        </div>
        <div class="seguidores">
            <p>👥 Seguidores: ${user.followers}</p>
            <p>👤 Seguindo: ${user.following}</p>
        </div>`
}

/**
 * Gera o HTML da lista de repositórios.
 * @param {Array} repositories 
 * @returns {string} HTML string
 */
function renderUserRepositories(repositories) {
    const reposList = repositories.length > 0
        ? repositories.slice(0, 10).map(createRepoItem).join('')
        : '<p>Nenhum repositório público encontrado.</p>'

    return `
        <div class="repo-title">
            <ul class="repo-items">${reposList}</ul>
        </div>`
}

/**
 * Cria o HTML de um item de repositório individual.
 * @param {Object} repo 
 * @returns {string} HTML string
 */
function createRepoItem(repo) {
    return `<li class="repo-item">
                <a href="${repo.html_url}" target="_blank" class="repo-link">
                <h3 class="repo-name">📦 ${repo.name}</h3>
                <div class="repo-info">
                    <span>⭐Star: ${repo.stargazers_count}</span>
                    <span>🍴 Fork: ${repo.forks_count}</span>
                    <span>👀 Watchers: ${repo.watchers_count}</span>
                    <span>👨‍💻 Language: ${repo.language ?? 'No Language'}</span>
                </div>
            </a>
            </li>`
}

/**
 * Exibe uma mensagem de erro na tela.
 * @param {string} mensagem 
 */
function mostrarErro(mensagem) {
    userInfo.innerHTML = `<div class="erro"><h3>${mensagem}</h3></div>`
}

export { mostrarUsuario, mostrarErro }