import React, { useState } from 'react';
import PagePair from '../components/PagePair';

export default function Editor() {
  const [page, setPage] = useState(0);
  return (
    <div>
      <h1>Bilderbuch-Magie</h1>
      <PagePair page={page} />
      <button onClick={() => setPage(p => Math.max(p - 1, 0))}>← Zurück</button>
      <button onClick={() => setPage(p => Math.min(p + 1, 19))}>Weiter →</button>
    </div>
  );
}