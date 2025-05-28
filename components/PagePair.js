import React, { useState } from 'react';

export default function PagePair({ page }) {
  const [images, setImages] = useState(Array(20).fill(null));
  const [texts, setTexts] = useState(Array(20).fill(''));

  const handleUpload = (e, i) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const newImages = [...images];
      newImages[i] = reader.result;
      setImages(newImages);
    };
    reader.readAsDataURL(file);
  };

  const handleText = (e, i) => {
    const newTexts = [...texts];
    newTexts[i] = e.target.value;
    setTexts(newTexts);
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {[0, 1].map(offset => {
        const i = page * 2 + offset;
        if (i >= 20) return null;
        return (
          <div key={i}>
            <input type="file" onChange={e => handleUpload(e, i)} />
            {images[i] && <img src={images[i]} alt="" style={{ width: 150 }} />}
            <textarea value={texts[i]} onChange={e => handleText(e, i)} />
          </div>
        );
      })}
    </div>
  );
}