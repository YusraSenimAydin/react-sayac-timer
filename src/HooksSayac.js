import React, { useState, useEffect } from 'react';

export default function HooksSayac() {
  const [sayac, setSayac] = useState(0);

  useEffect(() => {
    document.title = `${sayac} defa tıklandı`;
  });
  return (
    <div>
      <button onClick={() => setSayac(sayac + 1)}>
        Hooks Sayaç {sayac} defa tıklandı.
      </button>
    </div>
  );
}
