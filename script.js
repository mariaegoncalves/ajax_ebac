document.addEventListener("DOMContentLoaded", () => {
    const username = "ogiansouza";
    const apiUrl = `https://api.github.com/users/${username}`;

    const profileAvatar = document.getElementById("profile-avatar");
    const profileName = document.getElementById("profile-name");
    const profileUsername = document.getElementById("profile-username");
    const reposCount = document.getElementById("repos");
    const followersCount = document.getElementById("followers");
    const followingCount = document.getElementById("following");
    const profileLink = document.getElementById("profile-link");

    // Requisição Ajax usando Fetch API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados do usuário");
            }
            return response.json();
        })
        .then(data => {
            // Preencher os dados do perfil
            profileAvatar.src = data.avatar_url;
            profileName.innerText = data.name || username;
            profileUsername.innerText = `@${data.login}`;
            reposCount.innerText = data.public_repos;
            followersCount.innerText = data.followers;
            followingCount.innerText = data.following;
            profileLink.href = data.html_url;
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Não foi possível carregar os dados do usuário.");
        });
});
