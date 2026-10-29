import { Helmet } from 'react-helmet-async';

const SITE = 'https://www.noirandbean.com'; // change to your real domain

export default function Seo({ title, description, path = '/', noindex = false }) {
  const url = SITE + path;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
