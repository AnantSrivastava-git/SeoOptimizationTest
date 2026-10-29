import Seo from '../components/Seo.jsx';

export default function Story() {
  return (
    <>
      <Seo
        title="Our Story | Noir & Bean Brooklyn"
        description="An independent specialty coffee atelier in Brooklyn, focused on unhurried rituals, honest sourcing and calm spaces."
        path="/our-story"
      />
      <h1 className="page-title">About Noir &amp; Bean</h1>
      <p className="lead">An independent specialty coffee atelier founded in Brooklyn, focused on unhurried rituals, honest sourcing, and calm spaces.</p>
      <section className="split">
        <div>
          <span className="tag">Philosophy</span>
          <h2>Honest Coffee, Quietly Made</h2>
          <p>We partner directly with smallholder farmers who respect the land and their crop. Every lot is gently roasted to highlight sweet, clean flavor profiles without unnecessary complexity.</p>
        </div>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDox5sCoZMzZiVRU_3ZTtVmTY876qJ2ko0WGtlCHxpeNVGhS8tj57NZL2pQKTjaGAuurpkjmTueHrz_3T4ovJmeaYAtK1nEvqePxnV6AQhb81dyLoBeGXQcyqIAW8buPQ2b4WWcPTb6dvP6Z-gfXahMEAOvVMYypejT-w8HtoIVq6TAeF7Y-z3nruz2xgNCRZa6TjIHPRVBqP6fKlFmeEsB7Ubipc5PTd-LAX3zTtI"
        aria-label="Teal ceramic cup on a wooden table"/>
      </section>
      <section className="split flip">
        <div>
          <span className="tag">The space</span>
          <h2>A Place to Pause</h2>
          <p>Our Atlantic Avenue room offers tactile ceramics, warm morning daylight, and an acoustic pause from city commotion. Pull up a chair and enjoy coffee at your own pace.</p>
        </div>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUCvNFN0RnGAM_05n-jiYxQ8f-T_qscD7jlvGLx-y_6kT7Ewnccj8QugeLAfr2FxmSubYcSfp035zOnMBxcrz4ZKFHTcTQhN37wDWyXeKtbCcUdXKziy6Nm-TUCydlZKoUxWQwnFLlS7v9wI_dsjsZdbrCCzc9pZF4mZoQpvClF57ek32cwT7HOY9pXgHvU6IWSh6bdV9MrwbrPAbR2C3tc8Y_OZBXmJY1C6vDNcY"
        aria-label="Interior of the Atlantic Avenue shop" />
      </section>
    </>
  );
}
