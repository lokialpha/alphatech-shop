import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product' | 'article';
  product?: {
    price: number;
    currency?: string;
  };
}

const defaultMeta = {
  title: 'Alpha Tech - Premium Digital Products for Developers',
  description: 'Discover premium digital products: bot templates, automation scripts, API starters, and SaaS boilerplates. Build faster, ship sooner.',
  image: 'https://products.lokialpha.site/og-image.png',
  url: 'https://products.lokialpha.site',
};

export function SEO({ 
  title, 
  description = defaultMeta.description, 
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = 'website',
  product
}: SEOProps) {
  const fullTitle = title ? `${title} | Alpha Tech` : defaultMeta.title;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Alpha Tech" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Product specific */}
      {product && (
        <>
          <meta property="product:price:amount" content={product.price.toString()} />
          <meta property="product:price:currency" content={product.currency || 'USD'} />
        </>
      )}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Alpha Tech" />
      <meta name="keywords" content="digital products, bot templates, automation scripts, API starter, SaaS boilerplate, developer tools" />
    </Helmet>
  );
}
