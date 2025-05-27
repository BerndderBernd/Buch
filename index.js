
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [image, setImage] = useState(null)
  const [text, setText] = useState('')
  const [format, setFormat] = useState('hochformat')

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <Head>
        <title>Bilderbuch-Magie</title>
      </Head>
      <main>
        <h1>Bilderbuch-Magie</h1>
        <input type="file" onChange={handleImageUpload} />
        {image && <img src={image} alt="Vorschau" width="300" />}
        <textarea
          placeholder="Dein Text hier..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="hochformat">Hochformat</option>
          <option value="querformat">Querformat</option>
          <option value="quadratisch">Quadratisch</option>
        </select>
      </main>
    </div>
  )
}
