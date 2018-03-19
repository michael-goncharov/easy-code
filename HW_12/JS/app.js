// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Init searh input
const searchInput = document.getElementById('searchUser');

// Preloader wheel
let preloader = document.getElementById('page-preloader');
let loader = document.getElementById('loader');

function startPreloadWheel() {
  if (!preloader.classList.contains('done')) {
    preloader.classList.add('done');
    loader.classList.add('done');
  }
}
function endPreloadWheel() {
  if (preloader.classList.contains('done')) {
    preloader.classList.remove('done');
    loader.classList.remove('done');
  }
}

// Add event listener
searchInput.addEventListener('keyup', (e) => {
// Get input text

    const userText = e.target.value;
    if (userText !== '') {
      startPreloadWheel();
        // Make request
        github.getUser(userText)
            .then(user => {
                if (user.message === 'Not Found') {
                    // show alert
                    ui.showAlert(`User: ${userText} not found`, 'alert alert-danger');
                    ui.clearProfile();
                    endPreloadWheel();
                } else {
                    // show profile
                    ui.showProfile(user);
                    ui.clearAlert();
                    endPreloadWheel();
                }
                return user;
            })
            .then(github.getRepo.bind(github))
            .then(repos => {
                ui.showRepos(repos);
                endPreloadWheel();
            })
            .catch(err => console.log(err));
    } else {
        // Clear profile
        ui.clearProfile();
    }
})
