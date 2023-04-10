import React, { ImgHTMLAttributes, useEffect, useRef, useState } from 'react'
import { Dog } from '../pages'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  onLazyLoad?: (img: HTMLImageElement) => void
}

export function LazyImage({ src, onLazyLoad, ...props }: Props) {
  const [currentSrc, setCurrentSrc] = useState<string>('')
  const [isLoad, setIsLoad] = useState(false)
  const node = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (!node.current) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((image) => {
        if (!image.isIntersecting || !node.current) return
        if (typeof onLazyLoad === 'function' && !isLoad) {
          onLazyLoad(node.current)
          setIsLoad(true)
        }
        setCurrentSrc(src)
        observer.disconnect()
      })
    })
    observer.observe(node.current)
    return () => {
      observer.disconnect()
    }
  }, [src, onLazyLoad, isLoad])
  return (
    <img  
      ref={node}
      src={currentSrc}
      width={400}
      height={400}
      alt={'perro'}
      className='bg-slate-600 bg-opacity-40 rounded-md'
      {...props}
    />
  )
}
