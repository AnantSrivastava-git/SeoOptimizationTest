import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { findItem, money } from '../data/menu.js';

export default function Order() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = findItem(slug);
  if (!item) return <Navigate to="/menu" replace />;

  return (
    <>
      <Seo title={`Order ${item.name} | Noir & Bean`} description={item.desc} path={`/order/${slug}`} noindex />
      <div className="order">
        <img src={item.src} alt={item.name} aria-label={item.name}/>
        <div>
          <p className="muted">Order Now</p>
          <h1 className="item-title">{item.name}</h1>
          <div className="price">{money(item.price)}</div>
          <p className="muted">{item.desc}</p>
          <div className="actions">
            <button className="btn" onClick={() => navigate(`/confirmed/${slug}`)}>ORDER NOW</button>
            <Link className="btn ghost" to="/menu">BACK</Link>
          </div>
        </div>
      </div>
    </>
  );
}
