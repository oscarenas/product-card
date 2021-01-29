import React from 'react';
import { Talle } from '@components/ui';
import { ShareButtons, Seo } from '@components/common';
import { Details } from '@components/ui';
import LABEL from '../../../CONSTANTS/labels';

function ProductCard(props) {
  const { product, seo } = props;
  console.log(seo);

  return (
    <>
      <Seo
        title={seo.pageTitle}
        desc={seo.metaDescription}
        url={product.url}
        image={product.otherimages[0]}
        product={product}
      />
      <div className="xs:w-40 w-96 mx-auto bg-white">
        <div className="xs:mb-4 relative mb-10">
          <img
            className="absolut w-full object-cover object-center transition"
            src={product.otherimages[0]}
            alt={product.productname}
          />
        </div>

        <div className="px-6">
          <div className="border-b border-dafitiGray">
            <div className="flex mb-4">
              <div className="w-3/4">
                <h1 className="text-xl font-bold mb-1">{product.brand}</h1>
                <h2 className="text-base text-dafitiGray font-normal mb-1">
                  {product.productname}
                </h2>
                <p className="text-sm text-dafitiGray">
                  {LABEL.desc_sell_deliver}
                  <span className="ml-1 text-sm text-secondary font-medium">
                    {product.brand}
                  </span>
                </p>
              </div>
              <div className="w-1/4 flex justify-end mt-4">
                <img src="/heart.svg" alt="heart Icon" className="h-10" />
              </div>
            </div>
          </div>
          <Talle sizes={product.sizes} />
          <ShareButtons url={product.url} />
          <Details title={LABEL.desc_label}>
            <p
              className="text-lg text-primary"
              dangerouslySetInnerHTML={{
                __html: product.description.replace(
                  /(?:\r\n|\r|\n)/g,
                  '<br />'
                ),
              }}
            ></p>
          </Details>

          <Details title={LABEL.detail_label} />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
