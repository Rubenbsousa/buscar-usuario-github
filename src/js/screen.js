const userInfo = document.querySelector('#profile-results')

function mostrarUsuario(user) {
    const repositoriosItens = user.repositories.length > 0
        ? user.repositories.slice(0, 10).map(repo => 
            `<div class="repo-item" style="display: flex; flex-direction: column; align-items: flex-start; gap: 5px; border: 1px solid #ccc; padding: 10px; border-radius: 5px; width: 100%;">
                <a href="${repo.html_url}" target="_blank" style="font-weight: bold;">📦 ${repo.name}</a>
                <div class="repo-info" style="display: flex; gap: 10px; font-size: 0.9rem;">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                    <span>👀 ${repo.watchers_count}</span>
                    <span>👨‍💻 ${repo.language ?? 'Sem linguagem'}</span>
                </div>
            </div>`).join('')
        : '<p>Nenhum repositório público encontrado.</p>'

    userInfo.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 20px;">
            <img src="${user.avatar}" width="200" height="200" alt="Foto de perfil">
            <h2>${user.name}</h2>
        </div>
        <div class="seguidores" style=" display: flex; justify-content: space-around; margin-bottom: 20px;">
            <p>👥 Seguidores: ${user.followers}</p>
            <p>👤 Seguindo: ${user.following}</p>
        </div>
        <div class="repo-title" style="width: 100%;">
            <div class="repo-items" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">${repositoriosItens}</div>
        </div>`
}

export { mostrarUsuario }