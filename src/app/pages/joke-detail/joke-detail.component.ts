import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JokeService } from 'src/app/core/services';
import { Joke } from 'src/app/shared/models/joke.model';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.scss']
})
export class JokeDetailComponent implements OnInit {
  jokeDetail: Joke;

  constructor(private route: ActivatedRoute, private jokeService: JokeService) { }

  ngOnInit(): void {
    const jokeId = this.route.snapshot.queryParams['id'] || null;

    if (jokeId) {
      this.getJokeDetail(jokeId);
    }
  }

  /**
   * Gets joke detail.
   * @param {number} jokeId Joke id
   * @returns {void}
   */
  getJokeDetail(jokeId: number): void {
    this.jokeService.getJokeDetail(jokeId).subscribe((data) => {
      this.jokeDetail = data.value;
    });
  }
}
