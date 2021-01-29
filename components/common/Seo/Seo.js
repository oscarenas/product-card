import React from 'react';
import Head from 'next/head';
import LABEL from '../../../CONSTANTS/labels';

function Seo(props) {
  const { title, desc, url, image, product } = props;
  const similarProducts = () => {
    return product.related.map((item) => {
      const { brand, productname, description, url } = item;
      return {
        '@type': 'Product',
        brand: brand,
        name: productname,
        description: description,
        url: url,
      };
    });
  };
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={desc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={image} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://www.schema.org',
            '@type': 'Product',
            brand: `${product.brand}`,
            name: `${product.productname}`,
            alternateName: `${title}`,
            url: `${url}`,
            description: `${desc}`,
            sku: `${product.id}`,
            mpn: `${product.id}`,
            logo: `${product.otherimages[0]}`,
            image: `${product.otherimages}`,
            issimilarto: similarProducts(),
            offers: {
              '@type': 'Offer',
              url: 'https://example.com/anvil',
              priceCurrency: LABEL.ARG_CODE,
              price: `${product.originalprice}`,
              priceValidUntil: '2021-11-05',
              itemCondition: 'https://schema.org/UsedCondition',
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: 'Dafiti',
              },
            },
            review: {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'John Doe',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: '1',
            },
          }),
        }}
      />
    </Head>
  );
}

export default Seo;
