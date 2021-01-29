import React from 'react';

function ShareButtons(props) {
  const { url } = props;
  return (
    <div className="mt-8 mb-5 flex justify-center">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        className="px-3 py-1"
      >
        <img src="/facebook.svg" alt="heart Icon" className="h-6" />
      </a>
      <a
        href="https://twitter.com/intent/tweet"
        data-size="large"
        data-url={encodeURI(url)}
        data-via="dafiti"
        className="px-3 py-1"
      >
        <img src="/twitter.svg" alt="heart Icon" className="h-6" />
      </a>
      <a href={`whatsapp://send?text=${encodeURI(url)}`} className="px-3 py-1">
        <img src="/whatsapp.svg" alt="heart Icon" className="h-6" />
      </a>
    </div>
  );
}

export default ShareButtons;
