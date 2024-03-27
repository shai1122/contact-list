import { render, waitFor, screen  } from '@testing-library/react';
import React from 'react';
import Contacts from './contacts';

test('displays an error message if the fetch fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('API call failed'))
    );
    render(<Contacts />);
    await waitFor(() => {
      expect(screen.getByText(/unable to fetch contacts/i)).toBeInTheDocument();
    });
  });