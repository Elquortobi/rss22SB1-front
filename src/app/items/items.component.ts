import {Component, OnInit} from '@angular/core';
import {ItemService} from "./item.service";
import {Item} from "./item.model";
import {DialogService} from "primeng/dynamicdialog";
import {ItemFormComponent} from "../item-form/item-form.component";
import {Router} from "@angular/router";
import * as xml2js from 'xml2js';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [MessageService]
})
export class ItemsComponent implements OnInit {
  public items: Item[] = [];
  display = false;
  item = new Item();


  constructor(private readonly itemService: ItemService, private readonly router: Router, private readonly messageService: MessageService) {
    this.itemService.getItems().subscribe((res) => {
      this.parseXML(res)
    })

  }

  ngOnInit(): void {

  }

  viewItem(guid: string) {
    this.router.navigate(['items/' + guid])
  }

  deleteItem(guid: string) {
    this.itemService.deleteItemByGuid(guid).toPromise().then(
      () => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Item supprimé avec succès'});
        this.items = this.items.filter((item) => {
          item.guid != guid;

        })
      }
    )
  }

  addItem() {
    this.router.navigate(['/add-item'])
  }

  parseXML(data: any) {
    return new Promise((resolve) => {
      var k: string | number,
        arr: any = [];
      var parser = new xml2js.Parser({
        trim: true,
        explicitArray: true,
      });
      parser.parseString(data, (err: any, result: any) => {
        console.log(result.item.item[0])
        this.items = result.item.item;
      });
    });
  }
}
