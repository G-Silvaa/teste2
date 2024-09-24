import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";




export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../app/features/portfolio/portfolio.module").then(
            (m) => m.PortfolioModule
          ),
      },
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
