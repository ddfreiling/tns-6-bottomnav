import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../shared/data.service";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<DataItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    public onTapItem(item: DataItem) {
        this.router.navigate(['./item', item.id], {
            relativeTo: this.route,
        })
    }
}
