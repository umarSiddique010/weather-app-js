import UtilityMethods from './UtilityMethods.js';
import SearchImg from './assets/search.svg';
export default class Header {
  initHeader() {
    // creating a header to append form to make a header

    const header = UtilityMethods.createElement(
      'header',
      UtilityMethods.rootElement,
      'header',
      null
    );

    // appending form child into header element

    this.createInput(header);
  }

  createInput(formParent) {
    // creating form element

    const form = UtilityMethods.createElement(
      'form',
      formParent,
      'form-field',
      null
    );

    // creating input element

    const searchInput = UtilityMethods.createElement('input', form, null, null);
    searchInput.type = 'text';
    searchInput.id = 'searchInput';
    searchInput.placeholder = 'Enter a city name';

    //when page loads the focus shifted to the input

    searchInput.focus();

    // creating a form submit button

    const searchBtn = UtilityMethods.createElement(
      'button',
      form,
      'search-btn',
      null
    );

    searchBtn.type = 'submit';

    const searchIcon = UtilityMethods.createElement(
      'img',
      searchBtn,
      'search-icon',
      null
    );

    searchIcon.src = SearchImg;
    searchIcon.alt = 'search';
  }
}
