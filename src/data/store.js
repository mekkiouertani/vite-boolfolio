import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://localhost:8000/api",
  projects: [],
  currentPage: 1,
  lastPage: 0,
  selectedSection: "index",
  basePathImage: "http://localhost:8000/storage/",
});
