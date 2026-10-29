import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { findItem, money } from '../data/menu.js';

export default function Confirmed() {
  const { slug } = useParams();
  const item = findItem(slug);
  if (!item) return <Navigate to="/menu" replace />;

  return (
    <div className="narrow">
      <Seo title="Order Confirmed | Noir & Bean" description="Your Noir & Bean pickup order is confirmed." path="/confirmed" noindex />
      <h1 className="page-title">Order Confirmed</h1>
      <p className="lead">Thank you! Your order has been placed and will be ready for pickup shortly.</p>
      <div className="panel">
        <dl>
          <div><dt>Item</dt><dd>{item.name} × 1</dd></div>
          <div><dt>Order No.</dt><dd>NB-1042</dd></div>
          <div><dt>Pickup at</dt><dd>482 Atlantic Avenue, Brooklyn</dd></div>
          <div><dt>Ready in</dt><dd>10–15 min</dd></div>
          <div><dt>Total</dt><dd><strong>{money(item.price)}</strong></dd></div>
        </dl>
      </div>
      <p><Link className="btn" to="/">BACK TO HOME</Link></p>
    </div>
  );
}
