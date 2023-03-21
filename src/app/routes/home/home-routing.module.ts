import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultLayout } from "src/app/layout/default/default.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultLayout,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
