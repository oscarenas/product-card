import React from 'react';

function Details(props) {
  const { title, children } = props;
  return (
    <details>
      <summary className="text-titleGray font-bold mt-5 uppercase border-b border-dafitiGray pb-3">
        {title}
      </summary>
      {children}
    </details>
  );
}

export default Details;
