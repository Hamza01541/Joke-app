import { Component, OnInit } from '@angular/core';

import { JokeService } from 'src/app/core/services';
import { Joke } from 'src/app/shared/models/joke.model';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];
  totalCount: number;
  pageSize: number;
  searchStr: string;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.pageSize = 10;
    this.totalCount = 0;
    this.getJokes();
  }

  /**
   * Get jokes.
   * @param {number} pageIndex
   * @returns {void}
   */
  getJokes(pageIndex: number = 0): void {
    this.jokeService.getJokes(pageIndex, this.pageSize, this.searchStr).subscribe((data) => {
      this.jokes = data.jokes;
      this.totalCount = data.totalCount;
    });
  }

  /**
   * Clear search text box.
   * @returns {void}
   */
  clearSearch(): void {
    this.searchStr = '';
    this.getJokes();
  }
}
