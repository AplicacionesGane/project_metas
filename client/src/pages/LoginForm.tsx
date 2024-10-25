import { UserIcon, LockIcon } from '../components/icons'
import { getLogin } from '../services/LoginServices'
import { useAuth } from '../auth/AuthContext'
import { useState, FormEvent } from 'react'
import { Toaster, toast } from 'sonner'

function LoginPage () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

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
          <img src='/gane.webp' width={180} />
        </figure>

        <article className='w-full flex flex-col gap-2'>
          <label className='font-semibold'>Usuario</label>
          <div className='flex items-center w-full justify-around gap-4'>
            <UserIcon />
            <input
              onChange={e => setUsername(e.target.value)} name='username' type='text' placeholder='CV1118*****'
              className='w-full p-2 rounded-md border-none outline-none' required autoComplete='username'
            />
          </div>
        </article>

        <article className='w-full flex flex-col gap-2 mb-4'>
          <label className='font-semibold'>Contraseña</label>
          <div className='flex items-center w-full justify-around gap-4'>
            <LockIcon />
            <input
              onChange={e => setPassword(e.target.value)} name='password' type='password' placeholder='**********'
              className='w-full p-2 rounded-md border-none outline-none' required
            />
          </div>
        </article>

        <button
          className='p-2 bg-blue-700 rounded-lg text-white font-semibold shadow-xl hover:bg-green-500 transition duration-300 ease-in-out cursor-pointer'
        >
          Iniciar Sesión
        </button>
      </form>

      <Toaster richColors position='top-right' duration={5000} visibleToasts={3} />
    </section>

  )
}

export default LoginPage
