import { describe, it, expect, vi, beforeEach } from 'vitest';
import UtilityMethods from '../UtilityMethods.js';
import gsap from 'gsap';

vi.mock('gsap', () => {
  return {
    default: {
      to: vi.fn(),
      from: vi.fn(),
    },
  };
});

describe('UtilityMethods', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    UtilityMethods.rootElement = document.querySelector('#app');
  });

  it('should set rootElement to #app', () => {
    expect(UtilityMethods.rootElement).toBeInstanceOf(HTMLElement);
    expect(UtilityMethods.rootElement.id).toBe('app');
  });

  it('should create an element with tag, class, text, and append to parent', () => {
    const parent = document.createElement('div');
    document.body.appendChild(parent);
    const el = UtilityMethods.createElement('p', parent, 'test-class another-class', 'Hello');

    expect(el).toBeInstanceOf(HTMLElement);
    expect(el.tagName).toBe('P');
    expect(el.classList.contains('test-class')).toBe(true);
    expect(el.classList.contains('another-class')).toBe(true);
    expect(el.textContent).toBe('Hello');
    expect(parent.contains(el)).toBe(true);
  });

  it('should handle null class and text in createElement()', () => {
    const parent = document.createElement('div');
    document.body.appendChild(parent);
    const el = UtilityMethods.createElement('div', parent, null, null);
    expect(el).toBeInstanceOf(HTMLElement);
    expect(el.className).toBe('');
    expect(el.textContent).toBe('');
  });

  it('should format time with formateTime()', () => {
    const time = 1625079600; 
    const offset = 19800; 
    const formatted = UtilityMethods.formateTime(time, offset);

    expect(typeof formatted).toBe('string');
    expect(formatted).toMatch(/\d{2}:\d{2}:\d{2}/); 
  });

  it('should create live message with progress bar and remove after timeout', async () => {
    vi.useFakeTimers();

    UtilityMethods.liveMsg('Test Message');

    const msgBox = document.querySelector('.msg-box');
    const text = document.querySelector('.msg-text');
    const bar = document.querySelector('.progress-bar');

    expect(msgBox).toBeTruthy();
    expect(text).toBeTruthy();
    expect(bar).toBeTruthy();
    expect(text.textContent).toBe('Test Message');

    vi.advanceTimersByTime(3500);
    expect(gsap.to).toHaveBeenCalledWith(msgBox, expect.any(Object));

    vi.advanceTimersByTime(1500);
    expect(document.querySelector('.msg-box')).toBeNull();

    expect(gsap.from).toHaveBeenCalledWith(msgBox, expect.any(Object));

    vi.useRealTimers();
  });
});
