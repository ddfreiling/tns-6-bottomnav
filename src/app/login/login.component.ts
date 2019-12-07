import { Component, OnInit, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "Login",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    constructor(
        private zone: NgZone,
        private router: RouterExtensions,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    public onLogin() {
        console.log('onLogin');
        this.zone.run(() => {
            this.router.navigate(["/tabs", {
                outlets: {
                    homeTab: 'home',
                    browseTab: 'browse',
                    searchTab: 'search'
                }
            }], {
                clearHistory: true,
            });
        });
    }
}
