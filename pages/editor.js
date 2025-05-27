
import { useState } from 'react'
import Head from 'next/head'

export default function Editor() {
  const [pages, setPages] = useState([{ image: null, text: '' }])
  const [format, setFormat] = useState('hochformat')

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      const newPages = [...pages]
      newPages[index].image = reader.result
      setPages(newPages)
    }
    reader.readAsDataURL(file)
  }

  const handleTextChange = (e, index) => {
    const newPages = [...pages]
    newPages[index].text = e.target.value
    setPages(newPages)
  }

  const addPage = () => {
    if (pages.length < 20) {
      setPages([...pages, { image: null, text: '' }])
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Head>
        <title>Bilderbuch Editor</title>
      </Head>
      <h1>Bilderbuch Editor</h1>
      <label>Buchformat:</label>
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="hochformat">Hochformat</option>
        <option value="querformat">Querformat</option>
        <option value="quadratisch">Quadratisch</option>
      </select>
      {pages.map((page, index) => (
        <div key={index} style={{ marginTop: '20px', borderTop: '1px solid #ccc' }}>
          <h3>Seite {index + 1}</h3>
          <input type="file" onChange={(e) => handleImageUpload(e, index)} />
          {page.image && <img src={page.image} alt="preview" width="200" />}
          <textarea
            placeholder="Text hier eingeben..."
            value={page.text}
            onChange={(e) => handleTextChange(e, index)}
            style={{ display: 'block', width: '100%', height: '100px', marginTop: '10px' }}
          />
        </div>
      ))}
      <button onClick={addPage} style={{ marginTop: '20px' }}>+ Seite hinzufügen</button>
    </div>
  )
}
