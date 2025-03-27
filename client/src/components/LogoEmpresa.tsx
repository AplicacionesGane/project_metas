import { memo } from "react"

function LogoEmpresa() {
  return (
    <figure className='flex justify-center'>
      <img src='/logogane.webp' alt='Logo Gane' width={180} className='lg:w-32 2xl:w-44'/>
    </figure>
  )
}

export default memo(LogoEmpresa)