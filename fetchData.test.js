import { fetchData } from "./fetchData.js";

test('The data is resolved', () => {
  return fetchData().then((data) => {
    expect(data).toBe('resolved succefully!');
  });
});