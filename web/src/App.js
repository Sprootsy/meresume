import './App.css';
import { ArticleCard, ArticlesMasonry } from './Article';

import { ContactsBar, externalLinks } from './ContactsBar';
import AppFooter from './Footer';
import AppHeader from './Header';

// TODO move this to a backend
const articles = [
  {title: "Hello!", href: "https://github.com/JBerny/meresume", content: "I wanted to have a place to gather all my projects. Even though I'm not a web developer, I decided to learn react and host it on Github pages."},
  {title: "PromQL Workshop", href: "https://github.com/ing-bank/prometheus-scenarios", content: "During my work as an SRE I polished and published our internal PromQL workshop on the Github space of our company." },
  {title: "SRE Meetup NL", href: "https://www.meetup.com/nl-NL/site-reliability-engineering-nl/", content: "I'm organizing meetups about SRE topics together with a group of colleagues from multiple companies (Mollie, Booking.com, Xebia and WeTransfer). We host 2 talks and a networking session with drinks and food in different locations." }
];

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <ContactsBar externalLinks={externalLinks}></ContactsBar>
      <ArticlesMasonry>
        {articles.map((art, index) => (
          <ArticleCard key={index} title={art.title} href={art.href} content={art.content} />
        ))}
      </ArticlesMasonry>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
