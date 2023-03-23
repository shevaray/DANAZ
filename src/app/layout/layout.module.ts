import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultLayoutComponent } from "./default/default.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [DefaultLayoutComponent],
})
export class LayoutModule {}
