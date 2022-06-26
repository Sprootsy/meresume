import { render, screen } from '@testing-library/react';
import { ContactsBar, externalLinks } from './ContactsBar';

test('render contacts bar', () => {
  render(<ContactsBar externalLinks={externalLinks}></ContactsBar>);
  for (const name of ["Github", "Linkedin"]) {
    const elem = screen.getByAltText(`Logo for ${name}`);
    expect(elem).toBeInTheDocument();
    // TODO improve test
  }
});
