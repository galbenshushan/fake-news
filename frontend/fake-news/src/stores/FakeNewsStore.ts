import { makeAutoObservable } from "mobx";
import { fetchFakeNews } from "../services/FakeNewsService";
import { FakeNewsItem } from "../types/general";

class FakeNewsStore {
  fakeNews: FakeNewsItem[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.getFakeNews()
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  private getFakeNews = async () => {
    this.setIsLoading(true);
    this.setError(null);
    try {
      this.fakeNews = await fetchFakeNews();
    } catch (error: any) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  clearFakeNews() {
    this.fakeNews = [];
  }
}

const fakeNewsStore = new FakeNewsStore();
export default fakeNewsStore;
