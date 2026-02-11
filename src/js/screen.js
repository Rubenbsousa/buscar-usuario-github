const userInfo = document.querySelector('#profile-results')

function mostrarUsuario(user) {
    const repositoriosItens = user.repositories.length > 0
        ? user.repositories.map(repo => `<div class="repo-item"><a href="${repo.html_url}" target="_blank">📦 ${repo.name}</a></div>`).join('')
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
        <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content= center;">${repositoriosItens}</div>
    `
}

export { mostrarUsuario }