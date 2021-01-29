import { useState, useEffect } from 'react';
import { ProductCard } from '@components/product';
import data from 'data/detalle.json';

export default function Home() {
  const [product, setProduct] = useState();
  const [seo, setSeo] = useState();

  useEffect(() => {
    setProduct(...data.products);
    setSeo(data.seoSettings);
  }, []);

  return (
    <div className="py-32 bg-gray-100">
      {product && <ProductCard product={product} seo={seo} />}
    </div>
  );
}
