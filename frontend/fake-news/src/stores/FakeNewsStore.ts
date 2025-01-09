import { makeAutoObservable } from "mobx";
import { fetchFakeNews } from "../services/FakeNewsService";
import { FakeNewsItem } from "../types/general";
import { Categories } from "../enums/general";

class FakeNewsStore {
  fakeNews: FakeNewsItem[] = [];
  isLoading: boolean = false;
  error: string | null = null;
  step: number = 0;
  currentCategory: string = Categories.General;

  constructor() {
    makeAutoObservable(this);
    this.getFakeNews(Categories.General);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  setCurrentCategory(currentCategory: string) {
    this.currentCategory = currentCategory;
  }

  public incrementStep() {
    this.step += 1;
  }

  public getFakeNews = async (category: string) => {
    this.clearFakeNews();
    this.setIsLoading(true);
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
        while (true) {
          const index = jsonString.indexOf("\n");
          if (index === -1) break;

          const rawJson = jsonString.slice(0, index);
          jsonString = jsonString.slice(index + 1);

          const article: FakeNewsItem = JSON.parse(rawJson);
          this.incrementStep();
          this.fakeNews.push(article);
        }
      }
    } catch (error: any) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  clearFakeNews() {
    this.fakeNews = [];
    this.step = 0;
  }
}

const fakeNewsStore = new FakeNewsStore();
export default fakeNewsStore;
