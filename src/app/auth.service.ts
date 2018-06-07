import { reject } from 'q';

export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            // tslint:disable-next-line:no-shadowed-variable
            (resolve, reject) => {
                setTimeout(() => {
resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }
    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}
