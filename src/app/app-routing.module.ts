import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemsComponent} from "./items/items.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {ItemFormComponent} from "./item-form/item-form.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";

const routes: Routes = [
  {path: "", component: AcceuilComponent},
  {path: "items", component: ItemsComponent},
  {path: "add-item", component: ItemFormComponent},
  {path: "items/:guid", component: ItemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
