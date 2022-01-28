import './style.css'
import dictionary from "./assets/dictionary.json";

const searchInputEl = document.querySelector("#search-term");
const formEl = document.querySelector(".form");
const listEl = document.querySelector(".results-list");

function search(word) {
  // search for word in dictionary
  word = word.toLowerCase().trim();
  if (dictionary[word])
    return dictionary[word];
  return "نعتذر, لم نجد معنى لكلمتك";
}

function createListItem(result) {
  const li = document.createElement("li");
  li.textContent = result;
  return li;
}

function appendToList(result) {
  listEl.appendChild(createListItem(result))
}

function renderResults(results) {
  // adds results to the list
  if (results instanceof Array) {
    results.forEach(appendToList);
  } else {
    appendToList(results)
  }
}

function clearList() {
  // clears list
  listEl.innerHTML = "";
}

function handleSearch(event) {
  event.preventDefault();
  clearList();
  const results = search(searchInputEl.value);
  renderResults(results);
}

searchInputEl.addEventListener("input", handleSearch)
formEl.addEventListener("submit", handleSearch);
