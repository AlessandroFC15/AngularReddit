/**
 * Created by acception on 02/03/17.
 */

export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  upvote() : void {
    this.votes++;
  }

  downvote() : void {
    this.votes--;
  }
}
