import {Component} from '@angular/core';
import {MegaMenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rss22SB1-front';
  model: MegaMenuItem[] = [
    {
      label: "Acceuil",
      routerLink: '/',
    },
    {
      label: "Documentation",
      command() {
        window.location.href = "https://app-955e59a3-7f47-4987-afcf-9185bcdbdac9.cleverapps.io/swagger-ui/index.html"
      }
    },
    {
      label: "Items",
      routerLink: '/items',
    }
  ];

}
