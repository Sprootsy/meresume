import './App.css';

import { ContactsBar, externalLinks } from './ContactsBar';
import { Logo } from './Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <ContactsBar externalLinks={externalLinks}></ContactsBar>
      <footer>

      </footer>
    </div>
  );
}

export default App;
