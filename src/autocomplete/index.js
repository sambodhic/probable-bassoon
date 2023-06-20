import { getSuggestions, debounce } from "./utils.mjs";

const inputBox = document.getElementById("search-input");
const suggestionBox = document.getElementById("suggestions-wrapper");

const resetState = () => {
  suggestionBox.innerHTML = "";
};

const renderDropItems = (list = []) => {
  const suggFragment = document.createDocumentFragment();
  list.forEach((item) => {
    const el = document.createElement("div");
    el.innerHTML = item;
    el.classList.add("dropdown-item");
    el.setAttribute('data-key', item);
    suggFragment.appendChild(el);
  });

  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(suggFragment);
};

const handleSearch = async (keyword) => {
  const result = await getSuggestions(keyword);
  if (result.length) {
    suggestionBox.classList.add("suggestions-visible");
    renderDropItems(result);
  } else {
    resetState();
  }
};

const handleInputChange = (event) => {
  const value = event.target.value;
  if (value) {
    handleSearch(value);
  } else {
    resetState();
  }
};

const handleSelect = (event) => {
  const {key} = event.target.dataset;
  if (key){
    inputBox.value = key;
    resetState();
  }
}

(() => {
  inputBox.addEventListener("input", debounce(handleInputChange, 500));
  suggestionBox.addEventListener("click", handleSelect);
})();
