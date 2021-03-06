import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TabsComponent } from "./tabs.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/login",
        //redirectTo: "/tabs/(homeTab:home//browseTab:browse//searchTab:search)",
        pathMatch: "full"
    },

    {
        path: "login",
        loadChildren: () => import("~/app/login/login.module").then((m) => m.LoginModule),
        /**
        Login navigates like this to tabs:
            this.router.navigate(["/tabs", {
                outlets: {
                    homeTab: 'home',
                    browseTab: 'browse',
                    searchTab: 'search'
                }
            }], {
                clearHistory: true,
            });
         */
    },

    {
        path: "tabs",
        component: TabsComponent,
        children: [

            {
                path: "home",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
                outlet: "homeTab"
            },
            {
                path: "browse",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule),
                outlet: "browseTab"
            },
            {
                path: "search",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule),
                outlet: "searchTab"
            }

        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
