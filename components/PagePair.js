import React, { useState } from 'react';
export default function PagePair() {
  const [text1, setText1] = useState('Es war einmal...');
  const [text2, setText2] = useState('...der mutige Hase.');
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div><textarea value={text1} onChange={e => setText1(e.target.value)} /></div>
      <div><textarea value={text2} onChange={e => setText2(e.target.value)} /></div>
    </div>
  );
}