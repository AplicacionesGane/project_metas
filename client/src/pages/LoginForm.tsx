import { RiUserLine, RiLockLine } from '@remixicon/react'
import { Button } from '../components/tremor/Button'
import { Input } from '../components/tremor/Input'
import { getLogin } from '../services/LoginServices'
import { useAuth } from '../auth/AuthContext'
import { Toaster, toast } from 'sonner'
import { FormEvent } from 'react'

function LoginPage() {
  const { login } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    const username = form.username.value
    const password = form.password.value

    getLogin({ username, password })
      .then(res => {
        if (res.auth === true) {
          login(res.token)
        }
      })
      .catch(err => {
        const message = err.response.data.message
        toast.error(message, { description: 'Hubo un problema al iniciar sesión' })
      })
  }

  return (
    <section className='w-full h-screen flex flex-col items-center justify-center  relative'>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'><div className='absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]' /></div>

      <form className='w-96 mb-2 p-12 rounded-lg bg-transparent/10 flex flex-col gap-4 shadow-xl' onSubmit={handleSubmit}>
        <figure className='flex justify-center'>
          <img src='/logogane.webp' alt='Logo Gane' width={180} />
        </figure>

        <article className='w-full flex flex-col'>
          <label className='font-semibold'>Usuario</label>
          <div className='flex items-center'>
            <RiUserLine />
            <Input
              className='w-full p-2 rounded-md border-none outline-none' 
              placeholder='CV1118*****'
              autoComplete='username'
              name='username' 
              type='text' 
              required 
            />
          </div>
        </article>

        <article className='w-full flex flex-col'>
          <label className='font-semibold'>Contraseña</label>
          <div className='flex items-center'>
            <RiLockLine />
            <Input
              className='w-full p-2 rounded-md border-none outline-none' required
              placeholder='**********'
              name='password' 
              type='password' 
            />
          </div>
        </article>

        <Button type='submit' >
          Iniciar Sesión
        </Button>
      </form>

      <Toaster richColors position='top-right' duration={5000} visibleToasts={3} />
    </section>

  )
}

export default LoginPage
