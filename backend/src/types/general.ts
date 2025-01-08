export interface FakeNews {
  realTitle: string;
  fakeTitle: string;
  source: string;
  url: string;
  date: string;
  category: string;
  urlToImage: string;
}

export interface Article {
  urlToImage: string;
  title: string;
  url: string;
  publishedAt: string;
  source: { name: string };
}
