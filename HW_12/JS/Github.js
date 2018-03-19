class Github {
    constructor() {
        this.client_id = '6036d7c3e2d28845ea0a';
        this.client_secret = '8f0b379a5d39f67b880bb42c22a736cb8fb8868a';
    }

    // Get user by name
    getUser(name) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${name}?$client_id=${this.client_id}&client_secret=${this.client_secret}`)
                .then(res => res.json())
                .then(user => resolve(user))
                .catch(err => reject(err));
        })
    }
    // Get repos
    getRepo(user) {
        return new Promise((resolve, reject) => {
            if (!user.login) reject('User not found');

            fetch(`https://api.github.com/users/${user.login}/repos?per_page=${5}&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
                .then(res => res.json())
                .then(user => resolve(user))
                .catch(err => reject(err));
        })
    }
}
