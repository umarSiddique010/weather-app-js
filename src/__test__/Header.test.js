import { describe, it, expect, beforeEach } from 'vitest';
import Header from '../Header.js';
import UtilityMethods from '../UtilityMethods.js';

beforeEach(() => {
  document.body.innerHTML = `<div id="app"></div>`;
  UtilityMethods.rootElement = document.querySelector('#app');
});

describe('Header.js', () => {
  it('should create a <header> element with class "header"', () => {
    const header = new Header();
    header.initHeader();

    const headerElement = document.querySelector('header.header');
    expect(headerElement).toBeTruthy();
    expect(headerElement.tagName).toBe('HEADER');
    expect(headerElement.classList.contains('header')).toBe(true);
  });

  it('should create a <form> inside header with class "form-field"', () => {
    const header = new Header();
    header.initHeader();

    const form = document.querySelector('header > form.form-field');
    expect(form).toBeTruthy();
    expect(form.tagName).toBe('FORM');
  });

  it('should create an <input> with id "searchInput" and placeholder', () => {
    const header = new Header();
    header.initHeader();

    const input = document.querySelector('#searchInput');
    expect(input).toBeTruthy();
    expect(input.tagName).toBe('INPUT');
    expect(input.placeholder).toBe('Enter a city name');
    expect(input.type).toBe('text');
  });

  it('should create a <button> of type "submit" with class "search-btn"', () => {
    const header = new Header();
    header.initHeader();

    const button = document.querySelector('button.search-btn');
    expect(button).toBeTruthy();
    expect(button.type).toBe('submit');
  });

  it('should create an <img> inside button with class "search-icon"', () => {
    const header = new Header();
    header.initHeader();

    const img = document.querySelector('.search-btn > img.search-icon');
    expect(img).toBeTruthy();
    expect(img.tagName).toBe('IMG');
    expect(img.alt).toBe('search');
    expect(img.src).toMatch(/image\/svg\+xml/);
  });
});
