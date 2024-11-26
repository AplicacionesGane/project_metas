import { memo, useMemo } from 'react'

type Categoria = 'DIAMANTE' | 'ZAFIRO' | 'ORO' | 'PLATA' | 'BRONCE'

function RenderCategoria ({ cat: categoria, ver: version }: { cat: string, ver: string }) {
  const imageMap = useMemo(() => ({
    DIAMANTE: `/diamante${version}.webp`,
    ZAFIRO: '/zafiro.webp',
    ORO: '/oro.webp',
    PLATA: '/plata.webp',
    BRONCE: '/bronce.webp'
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