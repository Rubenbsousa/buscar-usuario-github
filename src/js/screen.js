const userInfo = document.querySelector('#profile-results')

function mostrarUsuario(user) {
    userInfo.innerHTML = `
        ${renderUserProfile(user)}
        ${renderUserRepositories(user.repositories)}`
}

function renderUserProfile(user) {
    return `
        <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
            <img src="${user.avatar}" width="200" height="200" alt="Foto de perfil">
            <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 10px;">
            <h2>${user.name}</h2>
            <p>${user.bio ?? 'Sem descrição'}</p> </div>
        </div>
        <div class="seguidores" style=" display: flex; justify-content: space-around; margin-bottom: 20px;">
            <p>👥 Seguidores: ${user.followers}</p>
            <p>👤 Seguindo: ${user.following}</p>
        </div>`
}

function renderUserRepositories(repositories) {
    const reposList = repositories.length > 0
        ? repositories.slice(0, 10).map(createRepoItem).join('')
        : '<p>Nenhum repositório público encontrado.</p>'

    return `
        <div class="repo-title" style="width: 1fr;">
            <div class="repo-items" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">${reposList}</div>
        </div>`
}

function createRepoItem(repo) {
    return `<div class="repo-item" style="display: flex; flex-direction: column; align-items: center; border: 1px solid #ccc; padding: 10px; border-radius: 5px; width: 24%; height: 180px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);">
                <a href="${repo.html_url}" target="_blank" style="font-weight: bold; margin-bottom: 10px; text-decoration: none;">📦 ${repo.name}</a>
                <div class="repo-info" style="display: flex; flex-direction: column; align-items: flex-start; gap: 10px; font-size: 0.8rem;">
                    <span>⭐Star: ${repo.stargazers_count}</span>
                    <span>🍴 Fork: ${repo.forks_count}</span>
                    <span>👀 Watchers: ${repo.watchers_count}</span>
                    <span>👨‍💻 Language: ${repo.language ?? 'No Language'}</span>
                </div>
            </div>`
}

export { mostrarUsuario }