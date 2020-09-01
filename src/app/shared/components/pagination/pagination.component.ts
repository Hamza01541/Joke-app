import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalCount: number;
  @Input() pageSize: number;

  @Output() pageChanged = new EventEmitter<any>();

  constructor() { }

  /**
   * Emits page change event with current page index.
   * @param {any} event
   * @returns {void}
   */
  onPageChange(event: any): void {
    this.pageChanged.emit(event.pageIndex);
  }
}
