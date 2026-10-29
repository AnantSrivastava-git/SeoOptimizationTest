import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

const FEATURED = [
  [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBLyJL_N7hFPDuwv0wo7U2xhx5998SMhEf654WJnD6D8eGws_JtVapvsqYifFYs80ZSUzpu0sm8Pslm8yWHDJQbhLiO9T04nDkf-3qajTekjHqcWgXIQw-UIiqxuT-_nlAScdrQZxCbDNU4dfKe7bvdGUjIBYF0CUV7-qqOLvBehFgmhzLUJ2ePYBxzCkfh__0T0wEt1W61AAZZ737ynLwyewhFmW_fi_9Al4qD6Ws",
    "Pour-Over Coffee",
    "Single-origin light roast",
    "a",
  ],
  [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBoWkxvsIgER8gT4NNOGBlcAnSLzckFbHYIxbT5o59f9d9TuEIYjvrO_qKwH2TF4sHiy2HRyKucNaFa19i6xROxMIbTCpIGfndrsyIlUEZwpACAuUtJ29WzNlQ5bBLzh-FnWPjFpfWOMbJRhyWJqGGz7ULEEWlSrQftXhIWfHoec7emJP1MinYtW1jDdxKt5gvX1KaVWipkTbOBUQeedj9y6nLKx_wRL1TugYdhK4o",
    "Espresso",
    "Double shot extraction",
    "b",
  ],
  [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDox5sCoZMzZiVRU_3ZTtVmTY876qJ2ko0WGtlCHxpeNVGhS8tj57NZL2pQKTjaGAuurpkjmTueHrz_3T4ovJmeaYAtK1nEvqePxnV6AQhb81dyLoBeGXQcyqIAW8buPQ2b4WWcPTb6dvP6Z-gfXahMEAOvVMYypejT-w8HtoIVq6TAeF7Y-z3nruz2xgNCRZa6TjIHPRVBqP6fKlFmeEsB7Ubipc5PTd-LAX3zTtI",
    "Dessert",
    "Freshly baked cardamom knot",
    "e",
  ],
];

export default function Home() {
  return (
    <>
      <Seo
        title="Noir & Bean | Specialty Coffee in Brooklyn, NY"
        description="Independent specialty coffee shop at 482 Atlantic Avenue, Brooklyn. Single-origin pour-overs, espresso, matcha and fresh-baked cardamom brioche. Order for pickup."
        path="/"
      />
      <div className="hero">
        <div>
          <h1>Coffee, simply done well.</h1>
          <p>
            Carefully sourced single-origin roasts and quiet mornings in
            Brooklyn.
          </p>
          <Link className="btn" to="/menu">
            EXPLORE MENU
          </Link>
        </div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUCvNFN0RnGAM_05n-jiYxQ8f-T_qscD7jlvGLx-y_6kT7Ewnccj8QugeLAfr2FxmSubYcSfp035zOnMBxcrz4ZKFHTcTQhN37wDWyXeKtbCcUdXKziy6Nm-TUCydlZKoUxWQwnFLlS7v9wI_dsjsZdbrCCzc9pZF4mZoQpvClF57ek32cwT7HOY9pXgHvU6IWSh6bdV9MrwbrPAbR2C3tc8Y_OZBXmJY1C6vDNcY"
          alt="Noir &amp; Bean Brooklyn Interior"
          width="..."
          height="..."
          aria-label="Sunlit counter and seating inside Noir & Bean"
        />
        {/* <div
          className="ph tall"
          role="img"
        /> */}
      </div>

      <div className="row">
        <h2>Featured Offerings</h2>
        <span>3 items</span>
      </div>
      <div className="grid">
        {FEATURED.map(([link, name, sub, tone]) => (
          <Link key={name} to="/menu" className="card">
              <img src={link} alt="Flat White" aria-label={name}/>
            <h3>{name}</h3>
            <p>{sub}</p>
          </Link>
        ))}
      </div>

      <div className="band">
        <div>
          <h2>Visit Us</h2>
          <p className="muted">482 Atlantic Avenue, Brooklyn, NY 11217</p>
        </div>
        <div>
          <strong>Hours</strong>
          <br />
          Mon–Fri: 7:00 AM–5:00 PM
          <br />
          Sat–Sun: 8:00 AM–5:00 PM
        </div>
      </div>
    </>
  );
}
