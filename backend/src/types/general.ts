export interface FakeNews {
  realTitle: string;
  fakeTitle: string;
  source: string;
  url: string;
  date: string;
  category: string;
  urlToImage: string;
  description:string;
}

export interface Article {
  description:string;
  urlToImage: string;
  title: string;
  url: string;
  publishedAt: string;
  source: { name: string };
}
