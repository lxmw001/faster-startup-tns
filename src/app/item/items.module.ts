import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ItemsRoutingModule } from "./items.routing";
import { ItemsComponent } from "./items.component";
import { ItemService } from "./item.service";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        ItemsRoutingModule
    ],
    declarations: [ItemsComponent], // declare all components that will be used within the module
    providers: [ ItemService ] // provide all services that will be used within the module
})
export class ItemsModule { }