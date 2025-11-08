import { jest } from '@jest/globals';

import { fetchAdviceById } from './fetchAdviceById.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        slip: {
          advice:
            'Remember that spiders are more afraid of you, than you are of them.',
        },
      }),
  })
);

test('Remember that spiders are more afraid of you, than you are of them.', async () => {
  await expect(fetchAdviceById(1)).resolves.toBe(
    'Remember that spiders are more afraid of you, than you are of them.'
  );
});
