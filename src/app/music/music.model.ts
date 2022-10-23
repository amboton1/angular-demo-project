export class Music {
    public id: string;
    public title: string;
    public imagePath: string;
    public artist: string;

  constructor(id: string, title: string, artist: string, imagePath: string) {
    this.id = id;
    this.title = title;
    this.imagePath = imagePath;
    this.artist = artist
  }
}