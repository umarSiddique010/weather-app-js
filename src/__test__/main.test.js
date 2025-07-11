import { describe, it, beforeEach, expect, vi } from 'vitest';
import UtilityMethods from '../UtilityMethods.js';
import Header from '../Header.js';
import InputHandler from '../InputHandler.js';
import RenderWeather from '../RenderWeather.js';

vi.mock('../Header.js', () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      initHeader: vi.fn(),
    })),
  };
});

vi.mock('../InputHandler.js', () => {
  return {
    default: vi.fn(),
  };
});

vi.mock('../RenderWeather.js', () => {
  return {
    default: vi.fn(),
  };
});

vi.mock('../UtilityMethods.js');

beforeEach(async () => {
  document.body.innerHTML = '<div id="app"></div>';
  UtilityMethods.rootElement = document.querySelector('#app');
  UtilityMethods.createElement = vi.fn((tag, parent, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    if (parent) parent.appendChild(el);
    return el;
  });

  vi.spyOn(window, 'addEventListener');

  await import('../main.js');
  document.dispatchEvent(new Event('DOMContentLoaded'));
});

describe('main.js', () => {
  it('should create app title with correct text and tag', () => {
    const h1Call = UtilityMethods.createElement.mock.calls.find(
      (c) => c[2] === 'app-title'
    );
    expect(h1Call).toBeTruthy();
    expect(h1Call[0]).toBe('h1');
    expect(h1Call[3]).toBe('Weather App');
  });

  it('should initialize Header and call initHeader()', () => {
    expect(Header).toHaveBeenCalled();
    expect(Header.mock.results[0].value.initHeader).toHaveBeenCalled();
  });

  it('should initialize RenderWeather and pass it to InputHandler', () => {
    expect(RenderWeather).toHaveBeenCalled();
    expect(InputHandler).toHaveBeenCalledWith(expect.anything());
  });

  it('should create custom cursor image with correct class, src and alt', () => {
    const call = UtilityMethods.createElement.mock.calls.find(
      (c) => c[2] === 'cursor'
    );
    expect(call).toBeTruthy();

    const img = document.querySelector('.cursor');
    expect(img).toBeInstanceOf(HTMLImageElement);
    expect(img.src).toContain('sun-rise-rain.png');
    expect(img.alt).toBe('sun image as cursor');
  });

  it('should respond to mousemove event by attaching listener to window', () => {
    const mouseCall = window.addEventListener.mock.calls.find(
      (c) => c[0] === 'mousemove'
    );
    expect(mouseCall).toBeTruthy();
    expect(typeof mouseCall[1]).toBe('function');

    const cursor = document.createElement('img');
    cursor.className = 'cursor';
    document.querySelector('#app').appendChild(cursor);

    mouseCall[1]({ x: 120, y: 200 });
    expect(document.querySelector('.cursor').tagName).toBe('IMG');
  });
});
