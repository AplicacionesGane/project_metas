import { RiUserLine, RiLockLine } from '@remixicon/react'
import { FormEvent, useState, useEffect } from 'react'
import { Button } from '../components/tremor/Button'
import { getLogin } from '../services/LoginServices'
import LogoEmpresa from '../components/LogoEmpresa'
import { Input } from '../components/tremor/Input'
import { useAuth } from '../auth/AuthContext'
import { Toaster, toast } from 'sonner'

const MAX_ATTEMPTS = 3
const BLOCK_TIME = 5 * 60 * 1000 // 5 minutes in milliseconds

function LoginPage() {
  const { setUser } = useAuth()

  const [attempts, setAttempts] = useState(0)
  const [isBlocked, setIsBlocked] = useState(false)
  const [blockEndTime, setBlockEndTime] = useState<number | null>(null)

  useEffect(() => {
    const storedAttempts = localStorage.getItem('loginAttempts')
    const storedBlockEndTime = localStorage.getItem('blockEndTime')

    if (storedAttempts) {
      setAttempts(parseInt(storedAttempts, 10))
    }

    if (storedBlockEndTime) {
      const endTime = parseInt(storedBlockEndTime, 10)
      if (Date.now() < endTime) {
        setIsBlocked(true)
        setBlockEndTime(endTime)
      } else {
        localStorage.removeItem('blockEndTime')
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('loginAttempts', attempts.toString())
  }, [attempts])

  useEffect(() => {
    if (blockEndTime) {
      localStorage.setItem('blockEndTime', blockEndTime.toString())
    }
  }, [blockEndTime])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (isBlocked) {
      if (Date.now() > (blockEndTime || 0)) {
        setIsBlocked(false)
        setBlockEndTime(null)
        setAttempts(0)
        localStorage.removeItem('blockEndTime')
        localStorage.removeItem('loginAttempts')
      } else {
        toast.error('Demasiados intentos fallidos. Inténtalo de nuevo más tarde 5(min).')
        return
      }
    }

    const form = e.target as HTMLFormElement
    const username = form.username.value
    const password = form.password.value

    getLogin(username, password)
      .then(res => {
        setUser(res)
        setAttempts(0) // Reset attempts on successful login
        localStorage.removeItem('loginAttempts')
      })
      .catch(err => {
        const message = err.response.data.message
        toast.error(message, { description: 'Hubo un problema al iniciar sesión' })
        if (err.response.status === 401) {
          setAttempts(prev => {
            const newAttempts = prev + 1
            if (newAttempts >= MAX_ATTEMPTS) {
              const endTime = Date.now() + BLOCK_TIME
              setIsBlocked(true)
              setBlockEndTime(endTime)
              toast.error('Demasiados intentos fallidos. Inténtalo de nuevo más tarde 5(min).')
            }
            return newAttempts
          })
        }
      })
  }


  return (
    <section className='w-full h-screen flex flex-col items-center justify-center relative'>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]' />
      </div>

      <form className='w-96 mb-2 p-12 rounded-lg bg-transparent/10 flex flex-col gap-4 shadow-xl' onSubmit={handleSubmit}>
        <LogoEmpresa />

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
              className='w-full p-2 rounded-md border-none outline-none'
              placeholder='**********'
              name='password'
              type='password'
              required
            />
          </div>
        </article>

        <Button type='submit'>
          Iniciar Sesión
        </Button>
      </form>

      <Toaster richColors position='top-right' duration={5000} visibleToasts={3} />
    </section>
  )
}

export default LoginPage