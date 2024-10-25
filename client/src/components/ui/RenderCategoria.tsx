import { useMemo } from 'react'

interface RenderCategoriaProps {
  cat: string
  ver: string
}

type Categoria = 'DIAMANTE' | 'ZAFIRO' | 'ORO' | 'PLATA' | 'BRONCE'

export function RenderCategoria ({ cat: categoria, ver: version }: RenderCategoriaProps) {
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
