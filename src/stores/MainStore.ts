import { defineStore } from 'pinia';
import { api } from '../services/api';

export const useMainStore = defineStore('main', {
  state: () => ({
    data: [],
    error: null as Error | null,
    loading: false,
  }),
  actions: {
    async fetchData(query: string) {
      try {
        this.loading = true;
        const response = await api(query);

        if (!response) {
          throw new Error('Oops! Something went wrong.');
        }

        this.data = response;

        this.loading = false;
      } catch (error: Error | any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
