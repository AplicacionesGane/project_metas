import { memo, useMemo } from 'react'

type Categoria = 'diamante' | 'diamante1a' | 'diamante2a' | 'diamante3a' | 'diamante4a' | 'diamante5a' | 'zafiro' | 'oro' | 'plata' | 'bronce'

function RenderCategoria({ cat: categoria }: { cat: string }) {
  const imageMap = useMemo(() => ({
    diamante: '/diamante.webp',
    diamante1a: '/diamante1a.webp',
    diamante2a: '/diamante2a.webp',
    diamante3a: '/diamante3a.webp',
    diamante4a: '/diamante4a.webp',
    diamante5a: '/diamante5a.webp',
    zafiro: '/zafiro.webp',
    oro: '/oro.webp',
    plata: '/plata.webp',
    bronce: '/bronce.webp'
  }), [])

  const RenderImagen = ({ cat }: { cat: Categoria }) => {
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