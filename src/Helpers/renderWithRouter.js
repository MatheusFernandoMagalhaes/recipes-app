import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

function withRouter(component, history) {
  return (
    <Router history={ history }>
      { component }
    </Router>
  );
}

export function renderWithRouter(
  component,
  {
    initialPath = '/',
    history = createMemoryHistory([initialPath]),
  } = {},
) {
  return {
    ...render(withRouter(component, history)),
    history,
  };
}

export default renderWithRouter;
