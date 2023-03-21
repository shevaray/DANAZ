import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultLayout } from "./default/default.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [DefaultLayout],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [DefaultLayout],
})
export class LayoutModule {}
