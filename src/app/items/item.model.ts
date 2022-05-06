export class Item {
  constructor(guid?: string, title?: string, date?: Date) {
    this.guid = guid;
    this.title = title;
    this.date = date;
  }

  guid?: string;
  title?: string;
  date?: Date;
}
