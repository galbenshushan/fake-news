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

  private incrementStep() {
    this.step += 1;
  }

  public getFakeNews = async (category: string) => {
    this.clearFakeNews();
    this.setIsLoading(true);
    this.setError(null);

    try {
      this.setCurrentCategory(category);
      const response = await fetchFakeNews(category);

      for (const article of response) {
        this.fakeNews.push(article);

        await new Promise((resolve) => {
          setTimeout(() => {
            this.incrementStep();
            resolve(null);
          }, 200);
        });
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
