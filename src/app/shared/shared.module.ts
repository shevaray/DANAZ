import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SHARED_ZORRO_MODULES } from "./shared-zorro.module";
import { NavbarComponent } from "./components/navbar/navbar.component";

const COMPONENTS = [NavbarComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...SHARED_ZORRO_MODULES],
  exports: [...COMPONENTS, ...SHARED_ZORRO_MODULES],
})
export class SharedModule {}
