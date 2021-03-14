let form = document.querySelector('#search_form'),
    profile = document.querySelector('.profile'),
    repos_and_followers = document.querySelector('.repos_and_followers');


async function sendRequestUser(user) {
    return fetch(`https://api.github.com/users/${user}`).then(response => {
        return response.json()
    })
}

async function sendRequestRepos(user){
    return fetch(`https://api.github.com/users/${user}/repos`).then(response => {
        return response.json()
    })
}

async function sendRequestFollowers(user){
    return fetch(`https://api.github.com/users/${user}/followers`).then(response => {
        return response.json()
    })
}

function submit(){
    profile.innerHTML = '';
    repos_and_followers.innerHTML = '';
    let user_to_search = document.querySelector('#user').value;

    sendRequestUser(user_to_search)
        .then(data => {
            if (data.message) {
                setError(data)
            } else {
                setData(data);
                setRepos(user_to_search);
                setFollowers(user_to_search);
            }
        })
}

function setData(data){
    profile.innerHTML = `<div class="profile_pic">
                <a href="${data.html_url}" target="_blank"><img src="${data.avatar_url}" alt="Profile avatar"></a>
            </div>
            <p><b><a href="${data.html_url}" target="_blank">${data.login}</a></b></p>`

    repos_and_followers.innerHTML = `
            <h3 class="repos_title">Repositories</h3>
            <div class="repos_list">
                
            </div>
            <h3 class="followers_title">Followers</h3>
            <div class="followers_list">
                
            </div>`
}

function setError(data){
    profile.innerHTML = `<h3 class="error">${data.message}</h3>`
}

function setRepos(user) {
    sendRequestRepos(user)
        .then(data => {
            let repos_list = document.querySelector('.repos_list');
            if (data.length === 0) {
                repos_list.innerHTML = `<h3 class="empty">This user has no repos</h3>`
            } else {
                let repos_list = document.querySelector('.repos_list');
                data.forEach((repo) => {
                    let repo_container = document.createElement('div')
                    repo_container.className = 'repos_list__item'
                    repo_container.innerHTML = `<p><a href="https://www.github.com/${user}/${repo.name}" target="_blank">${repo.name}</a></p>`
                    repos_list.appendChild(repo_container)
                })
            }
        })
}

function setFollowers (user) {
    sendRequestFollowers(user)
        .then(data => {
            let followers_list = document.querySelector('.followers_list');
            if (data.length === 0) {
                followers_list.innerHTML = `<h3 class="empty">This user has no followers</h3>`
            } else {
                data.forEach((follower) => {
                    let follower_container = document.createElement('div');
                    follower_container.className = 'followers_list__item';
                    follower_container.innerHTML = `<a href="${follower.html_url}" target="_blank"><img src="${follower.avatar_url}" alt="avatar"></a>
                    <p><a href="${follower.html_url}">${follower.login}</a></p>`
                    followers_list.appendChild(follower_container);
                })
            }
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    submit()
})