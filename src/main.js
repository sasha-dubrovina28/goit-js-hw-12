import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton
} from "./js/render-functions";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let currentQuery = "";
let page = 1;
let totalHits = 0;

form.addEventListener("submit", onFormSubmit);
loadMoreBtn.addEventListener("click", onLoadMoreClick);

async function onFormSubmit(event) {
  event.preventDefault();

  currentQuery = form.elements["search-text"].value.trim();
  page = 1;

  if (currentQuery === "") {
    iziToast.error({
      message: "Please enter a search query!",
    });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });
      return;
    }

    createGallery(data.hits);

    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again later!",
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

async function onLoadMoreClick() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);

    scrollPage();

    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again later!",
    });
  } finally {
    hideLoader();
  }
}

function scrollPage() {
  const galleryItem = document.querySelector(".gallery-item");

  if (!galleryItem) {
    return;
  }

  const cardHeight = galleryItem.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });
}