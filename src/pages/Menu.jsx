import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { MENU, money } from '../data/menu.js';

export default function Menu() {
  return (
    <>
      <Seo
        title="Menu | Noir & Bean Brooklyn"
        description="Flat white, slow pour-over, batch brew, iced tonic espresso, ceremonial matcha and cardamom brioche. Order for pickup at Noir & Bean, Brooklyn."
        path="/menu"
      />
      <h1 className="page-title">Menu</h1>
      <p className="lead">Select a drink or pastry to order for pickup.</p>
      <div className="grid">
        {MENU.map((it) => (
          <Link key={it.slug} to={`/order/${it.slug}`} className="card">
            <img src={it.src} alt={it.name} aria-label={it.name}/>
            <h3><span>{it.name}</span><span>{money(it.price)}</span></h3>
            <p>{it.desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
