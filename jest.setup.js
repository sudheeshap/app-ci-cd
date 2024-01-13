// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

window.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  }),
);
