import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../items/item.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
  providers: [MessageService]
})
export class ItemFormComponent implements OnInit {
  itemForm: FormGroup;
  imageTypes = [
    {name: 'gif', code: 'gif'},
    {name: 'jpg', code: 'jpeg'},
    {name: 'jpeg', code: 'jpeg'},
    {name: 'png', code: 'png'},
    {name: 'bmp', code: 'bmp'},
  ]
  contentTypes = [
    {name: "text", code: "text"},
    {name: "src", code: "src"}
  ]

  constructor(private readonly formBuilder: FormBuilder, private readonly itemService: ItemService, private readonly messageService: MessageService,
              private router: Router) {
    this.itemForm = this.formBuilder.group({
        guid: Math.random().toString().replace('.', ''),
        title: ['', Validators.required],
        categorie: ['', Validators.required],
        date: ['', Validators.required],
        imageUrl: ['', Validators.required],
        imageType: ['', Validators.required],
        imageTaille: ['', Validators.required],
        imageAlt: ['', Validators.required],
        contentUrl: ['', Validators.required],
        contentType: ['', Validators.required],
        contentValue: ['', Validators.required],
        authorEmail: ['', Validators.required],
        authorName: ['', Validators.required],
        authorUri: ['', Validators.required],

      }
    );
  }

  ngOnInit(): void {

  }

  addItem() {
    const value = this.itemForm.value
    const parsedDate = [this.pad(value.date.getDate()), this.pad(value.date.getMonth() + 1), value.date.getFullYear()].join('/');
    let xml = "<item>\n" +
      "<guid>" + value.guid + "</guid>\n" +
      "<title>" + value.title + "</title>\n" +
      "<category term=" + '\"' + value.categorie + '\"' + "/>\n" +
      "<published>" + parsedDate + "</published>\n" +
      "<image alt=" + '\"' + value.imageAlt + '\" ' + "href=" + '\"' + value.imageUrl + '\" ' + "type=" + '\"' + value.imageType + '\" ' + "/>" +
      "<content href=" + '\"' + value.contentUrl + '\"' + " type=" + '\" ' + value.contentType + '\"' + ">" + value.contentValue + "</content>" +
      "<author>" +
      "<name>" + value.authorName + "</name>\n" +
      "<uri>" + value.authorUri + "</uri>\n" +
      "<mail>" + value.authorEmail + "</mail>" +
      "</author>\n" +
      "</item>";
    this.itemService.addItem(xml).toPromise().then(
      (res) => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Item ajouté avec succès'});
        setTimeout(() => {
          this.router.navigate(['/items']);
        }, 2000);
      }
    )
  }

  pad(val: number) {
    return (val < 10) ? '0' + val : val;
  }


}
