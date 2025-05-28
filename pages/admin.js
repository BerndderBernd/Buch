import { useState } from 'react';
export default function Admin() {
  const [pw, setPw] = useState('');
  return pw === 'magie2025' ? <div>Adminbereich</div> : (
    <input placeholder="Passwort" onChange={e => setPw(e.target.value)} />
  );
}