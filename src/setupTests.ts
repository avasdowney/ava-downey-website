// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  // @ts-expect-error
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    // @ts-expect-error
    addListener: jest.fn(), // deprecated
    // @ts-expect-error
    removeListener: jest.fn(), // deprecated
    // @ts-expect-error
    addEventListener: jest.fn(),
    // @ts-expect-error
    removeEventListener: jest.fn(),
    // @ts-expect-error
    dispatchEvent: jest.fn(),
  })),
});

// Mock window.scrollTo
// @ts-expect-error
window.scrollTo = jest.fn();
