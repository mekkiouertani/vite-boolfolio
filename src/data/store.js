import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api",
  projects: [],
  currentPage: 1,
  lastPage: 0,
  selectedSection: "index",
});
