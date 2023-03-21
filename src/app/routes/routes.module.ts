import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RoutesRoutingModule } from "./routes-routing.module";
import { LayoutModule } from "../layout/layout.module";
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, RoutesRoutingModule, LayoutModule, HomeModule],
})
export class RoutesModule {}
