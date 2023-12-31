import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchText = new EventEmitter<string>();

  getSearchText(text: string) {
    this.searchText.emit(text);
  }
}
