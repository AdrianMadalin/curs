import {Injectable, ViewContainerRef} from '@angular/core';
import {  
    CanActivate, 
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import * as firebase from 'firebase';
import {ToastsManager} from "ng2-toastr";


@Injectable()
export class UserService implements CanActivate {
    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;
    
    constructor( private router: Router , 
                 private toasterManger: ToastsManager) {
        firebase.initializeApp({
            apiKey: "AIzaSyCUvluSCDNnEVeQj3nUA6Y3UrncZ8zYZ6Y",
            authDomain: "ang-firebase-6011f.firebaseapp.com",
            databaseURL: "https://ang-firebase-6011f.firebaseio.com",
            projectId: "ang-firebase-6011f",
            storageBucket: "ang-firebase-6011f.appspot.com",
            messagingSenderId: "317485863064"
        });


     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
        let url: string = state.url;
        return this.verifyLogin(url);
    }   

    verifyLogin(url: string): boolean {
        if (this.userLoggedIn) { return true; }
                
        this.router.navigate(['/admin/login']);
        return false;
    }

    register(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                this.showMessageSuccess(`${error.message} Please Try Again!`);
        });
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;
        if (this.authUser) {

            this.showMessageSuccess(`Welcome ${this.authUser.email}`);
            
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(['/admin']);
        }
    }

    login(loginEmail: string, loginPassword: string) {
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .catch((error) => {
                this.showMessageSuccess(`${error.message} Unable to login. Try again!`);
        });
    }

    logout(){
        this.userLoggedIn = false;
        firebase.auth().signOut().then(() => {
            this.showMessageSuccess(`Logged Out!`);

        }, (error) => {
            this.showMessageSuccess(`${error.message} Unable to logout. Try again!`);
        });
    }
    
    public showMessageSuccess(title: string, body?: string) {
        this.toasterManger.success(title, body)
    }

}