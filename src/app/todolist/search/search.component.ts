import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextchnaged: EventEmitter<string> = new EventEmitter<string>();

  onsearchTextchnaged() {
    this.searchTextchnaged.emit(this.searchText);
  }
}
