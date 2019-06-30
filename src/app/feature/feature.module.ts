import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FeatureComponent } from "./feature.component"; // Import all components that will be used in the lazy loaded module
import { FeatureRoutingModule } from "./feature.routing"; // import the routing module

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        FeatureRoutingModule
    ],
    declarations: [FeatureComponent], // declare all components that will be used within the module
    // providers: [ FeatureService ] // provide all services that will be used within the module
})
export class FeatureModule { }