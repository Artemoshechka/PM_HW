//Setting DOM elements
let form = document.querySelector("#search_form"),
    profile = document.querySelector("#profile"),
    userRepos = document.querySelector("#userRepos"),
    userFollowers = document.querySelector("#userFollowers"),
    userPage = document.querySelector("#userPage"),
    profileFollowers = document.createElement("button"),
    profileRepos = document.createElement("button");

//Submit handler
const submit = () => {
    userPage.innerHTML = "";
    profile.innerHTML = "";
    let user = document.querySelector("#user").value;
    fetch(`https://api.github.com/users/${user}`)
        .then((result) => result.json())
        .then((data) => {
            if (data.message) {
                set_error(data);
            }else{
                set_data(data);
                console.log(data);
            }
        });
};

//Setting data handler
const set_data = (data) => {
    profile.className = "profile";

    let profileImg = document.createElement("div");
    profileImg.innerHTML =
        `<img src="${data.avatar_url}" alt="avatar">`

    let profileInfo = document.createElement("div");
    profileInfo.className = "profileInfo";

    let profileName = document.createElement("a");
    profileName.innerHTML = `Username: ${data.login}`;
    profileName.href = data.html_url;
    profileName.target = "_blank";

    profileFollowers.innerHTML = `Followers: ${data.followers}`;
    profileRepos.innerHTML = `Repos: ${data.public_repos}`;

    let repoTitle = document.createElement("div");
    repoTitle.id = "repoTitle";

    let followerTitle = document.createElement("div");
    followerTitle.id = "followerTitle";

    profileInfo.appendChild(profileName);
    profileInfo.appendChild(profileFollowers);
    profileInfo.appendChild(profileRepos);
    profile.appendChild(profileImg);
    profile.appendChild(profileInfo);
    userPage.appendChild(profile);
    userPage.appendChild(repoTitle);
    userPage.appendChild(followerTitle);
};

//Error handler
const set_error = (data) => {
    userPage.innerHTML = "";

    let err = document.createElement("h2");
    err.className = "text-danger";
    err.innerHTML = data.message;

    userPage.appendChild(err);
};

//Repos handler
const repos_click = () => {
    let user = document.querySelector("#user").value;
    repoTitle.innerHTML = "";
    userRepos.innerHTML = "";
    fetch(`https://api.github.com/users/${user}/repos`)
        .then((result) => result.json())
        .then((repositories) => {
            set_repos(user, repositories);
        });
};

const set_repos = (user, repositories) => {
    if (repoTitle.style.display === "block") {
        repoTitle.style.display = "none";
    }else{
        repoTitle.innerHTML = "";
        repoTitle.style.display = "block";

        let title = document.createElement("h3");
        title.innerHTML = "Repositories";
        repoTitle.appendChild(title);

        repositories.forEach((repo) => {
            let repoName = document.createElement("li");
            let repoLink = document.createElement("a");

            repoLink.innerHTML = repo.name;
            repoLink.href = `https://www.github.com/${user}/${repo.name}`;
            repoLink.target = "_blank";

            repoName.appendChild(repoLink);
            userRepos.appendChild(repoName);
            repoTitle.appendChild(userRepos);
            userPage.appendChild(repoTitle);
        });
    }
};

//Followers handler
const followers_click = () => {
    let user = document.getElementById("user").value;
    followerTitle.innerHTML = "";
    userFollowers.innerHTML = "";

    fetch(`https://api.github.com/users/${user}/followers`)
        .then((result) => result.json())
        .then((followers) => {
            set_followers(followers);
        });
};

const set_followers = (followers) => {
    if (followerTitle.style.display === "block") {
        followerTitle.style.display = "none";
    }else{
        followerTitle.innerHTML = "";
        followerTitle.style.display = "block";

        let title = document.createElement("h3");
        title.innerHTML = "Followers";
        followerTitle.appendChild(title);

        followers.forEach((follower) => {
            let followerName = document.createElement("li");

            let followerImg = document.createElement("div");
            followerImg.innerHTML =
                `<img src="${follower.avatar_url}" alt="avatar">`

            let followerLink = document.createElement("a");

            followerLink.innerHTML = follower.login;
            followerLink.href = follower.html_url;
            followerLink.target = "_blank";

            followerName.appendChild(followerImg);
            followerName.appendChild(followerLink);
            userFollowers.appendChild(followerName);
            followerTitle.appendChild(userFollowers);
            userPage.appendChild(followerTitle);
        });
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
});

profileRepos.onclick = () => {
    repos_click();
};

profileFollowers.onclick = () => {
    followers_click();
};