import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MegaMenuModule} from "primeng/megamenu";
import {ItemsComponent} from './items/items.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {TableModule} from "primeng/table";
import {ScrollTopModule} from "primeng/scrolltop";
import {PaginatorModule} from "primeng/paginator";
import {DropdownModule} from "primeng/dropdown";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {SliderModule} from "primeng/slider";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {MultiSelectModule} from "primeng/multiselect";
import {ContextMenuModule} from "primeng/contextmenu";
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import {RadioButtonModule} from "primeng/radiobutton";
import {TooltipModule} from "primeng/tooltip";
import {ProgressBarModule} from "primeng/progressbar";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {TabViewModule} from "primeng/tabview";
import {ToggleButtonModule} from "primeng/togglebutton";
import {RatingModule} from "primeng/rating";
import {SkeletonModule} from "primeng/skeleton";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {HttpClientModule} from "@angular/common/http";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {ItemFormComponent} from './item-form/item-form.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AcceuilComponent,
    ItemFormComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CardModule, ButtonModule, MegaMenuModule, TableModule, ScrollPanelModule, PaginatorModule, DropdownModule,
    CommonModule,
    FormsModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    ConfirmDialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ProgressBarModule,
    TooltipModule,
    RadioButtonModule,
    ToolbarModule,
    FileUploadModule,
    TabViewModule,
    ToggleButtonModule,
    RatingModule,
    SkeletonModule,
    HttpClientModule,
    DynamicDialogModule,
    DialogModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
