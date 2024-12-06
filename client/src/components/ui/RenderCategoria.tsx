import { memo, useMemo } from 'react'

type Categoria = 'diamante' | 'zafiro' | 'oro' | 'plata' | 'bronce'

function RenderCategoria ({ cat: categoria, ver: version }: { cat: string, ver: string }) {
  const imageMap = useMemo(() => ({
    diamante: `/diamante${version}.webp`,
    zafiro: '/zafiro.webp',
    oro: '/oro.webp',
    plata: '/plata.webp',
    bronce: '/bronce.webp'
  }), [version])

  const RenderImagen = ({ cat } : {cat: Categoria}) => {
    const src = imageMap[cat]
    if (!src) {
      console.error(`Invalid category: ${cat}`)
      return null
    }
    return <img src={src} loading='lazy' alt='logo segun categoria' />
  }

  return <RenderImagen cat={categoria as Categoria} />
}

export default memo(RenderCategoria)