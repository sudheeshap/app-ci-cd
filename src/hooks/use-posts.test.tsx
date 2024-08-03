import '@testing-library/jest-dom';
import { waitFor, renderHook } from '@testing-library/react';

import { usePosts } from './use-posts';

describe('usePosts', () => {
  it('returns posts', () => {
    const { result } = renderHook(usePosts);

    waitFor(() => expect(result.current.posts).toBe([]));
  });
});
