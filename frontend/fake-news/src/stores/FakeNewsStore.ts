import { makeAutoObservable } from "mobx";
import { fetchFakeNews, getTotalNews } from "../services/FakeNewsService";
import { FakeNewsItem } from "../types/general";
import { Categories } from "../enums/general";

class FakeNewsStore {
  fakeNews: FakeNewsItem[] = [];
  error: string | null = 'dddd';
  totalNews: number = 0;
  currentCategory: string = "";

  constructor() {
    makeAutoObservable(this);
    this.getFakeNews(Categories.General);
    this.getTotal();
  }

  setError(error: string | null) {
    this.error = error;
  }

  setTotalNews(totalNews: number) {
    this.totalNews = totalNews;
  }

  setCurrentCategory(currentCategory: string) {
    this.currentCategory = currentCategory;
  }

  private getTotal = async () => {
    const result = await getTotalNews();
    const total = await result.json();
    this.setTotalNews(total);
  };

  public getFakeNews = async (category: string) => {
    if (category.toLowerCase() === this.currentCategory.toLowerCase()) {
      return;
    }
    this.clearFakeNews();
    this.setError(null);

    try {
      this.setCurrentCategory(category);
      const result = await fetchFakeNews(category);
      const reader = result.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let jsonString = "";

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        jsonString += decoder.decode(value, { stream: true });

        this.processArticlesStream(jsonString);
        jsonString = jsonString.slice(jsonString.indexOf("\n") + 1);
      }
    } catch (error: any) {
      this.setError(error.message);
    }
  };

  private processArticlesStream = (jsonString: string) => {
    let index;
    while ((index = jsonString.indexOf("\n")) !== -1) {
      const rawJson = jsonString.slice(0, index);
      jsonString = jsonString.slice(index + 1);

      const article: FakeNewsItem = JSON.parse(rawJson);
      this.fakeNews.push(article);
    }
  };

  clearFakeNews() {
    this.fakeNews = [];
  }
}

const fakeNewsStore = new FakeNewsStore();
export default fakeNewsStore;
