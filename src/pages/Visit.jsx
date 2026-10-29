import Seo from '../components/Seo.jsx';

export default function Visit() {
  return (
    <>
      <Seo
        title="Visit & Hours | Noir & Bean, 482 Atlantic Ave, Brooklyn"
        description="Find Noir & Bean at 482 Atlantic Avenue, Brooklyn, NY 11217. Open Mon–Fri 7 AM–5 PM and Sat–Sun 8 AM–5 PM. Phone (718) 555-0192."
        path="/visit"
      />
      <h1 className="page-title">Visit Noir &amp; Bean</h1>
      <p className="lead">Location details, operating hours, and inquiries.</p>
      <div className="split top">
        <div className="panel">
          <h3>Location</h3>
          <address>482 Atlantic Avenue<br />Brooklyn, NY 11217</address>
          <h3>Hours</h3>
          <dl>
            <div><dt>Monday–Friday</dt><dd>7:00 AM–5:00 PM</dd></div>
            <div><dt>Saturday–Sunday</dt><dd>8:00 AM–5:00 PM</dd></div>
          </dl>
          <h3>Contact</h3>
          <p>Phone: <a href="tel:+17185550192">(718) 555-0192</a><br />
            Email: <a href="mailto:hello@noirandbean.com">hello@noirandbean.com</a></p>
          <a className="btn block" rel="noopener" target="_blank"
             href="https://www.google.com/maps/search/?api=1&query=482+Atlantic+Avenue+Brooklyn+NY+11217">
            GET DIRECTIONS
          </a>
        </div>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUCvNFN0RnGAM_05n-jiYxQ8f-T_qscD7jlvGLx-y_6kT7Ewnccj8QugeLAfr2FxmSubYcSfp035zOnMBxcrz4ZKFHTcTQhN37wDWyXeKtbCcUdXKziy6Nm-TUCydlZKoUxWQwnFLlS7v9wI_dsjsZdbrCCzc9pZF4mZoQpvClF57ek32cwT7HOY9pXgHvU6IWSh6bdV9MrwbrPAbR2C3tc8Y_OZBXmJY1C6vDNcY" alt="Noir &amp; Bean Cafe Brooklyn" />
      </div>
    </>
  );
}
