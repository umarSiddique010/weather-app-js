import { describe, it, expect, vi } from 'vitest';

vi.mock('gsap', () => {
  return {
    default: {
      from: vi.fn(),
      registerPlugin: vi.fn(),
    },
    ScrollTrigger: {},
  };
});

import initAnimations from '../animatingApp.js';
import gsap from 'gsap';

describe('initAnimations', () => {
  it('should call gsap.from multiple times', () => {
    initAnimations();

    expect(gsap.from).toHaveBeenCalled();
    expect(gsap.from).toHaveBeenCalledTimes(9);
  });
});
