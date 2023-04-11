
import { useState } from 'react'
import { LazyImage } from '../components/lazyImage'

const API = 'https://api.thedogapi.com/v1/images/search'

export default function Home() {
  const [images, setImages] = useState<Dog[]>([])
  const addImage = async () => {
    const dataFetched = await fetch(API)
    const [data]: Dog[] = await dataFetched.json()
    setImages([...images, data])
  }

  return (
    <main className='flex flex-col items-center w-10/12 gap-5 my-24 m-auto'>
      <h1 className='text-3xl font-bold'>Componente Lazy Image</h1>
      <p className='text-gray-500 font-semibold text-center'>
        Un componente genérico de React para cargar imagenes con lazy loading
      </p>
      <p className='text-gray-500 font-semibold text-center'>
        Las imágenes agregadas no se descargaran hasta que sean visibles en la
        pantalla
      </p>
      <button
        className='bg-indigo-600 text-white px-3 py-2 rounded-md font-semibol'
        onClick={addImage}>
        Agregar un nuevo perro
      </button>
      <span>{`Hay un total de ${images.length} imagenes`}</span>
      {images.map((img) => (
        <LazyImage key={img.id} src={img.url} onLazyLoad={(img)=>{console.log('uwu')}}  />
      ))}
    </main>
  )
}
