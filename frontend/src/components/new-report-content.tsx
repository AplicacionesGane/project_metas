import { DialogHeader, DialogTitle, DialogDescription, DialogContent, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { useAuth } from '@/hooks/useAuth';
import { type FormEvent } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import { Computer } from 'lucide-react';


function LazyDialogContent({ funClose, reload }: { funClose: (openDialog: boolean) => void, reload: () => void }) {
  const { user } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(new window.FormData(e.currentTarget));

    axios.post('/register', formData)
      .then(res => {
        console.log(res.data);
        funClose(false)
        reload()
        toast.success('Usuario creado correctamente', { description: 'agregado a lista de usuarios registrados' })
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 400) {
          toast.error(err.response.data.message)
        } else {
          toast.error('Error inesperado :O')
        }
      })
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Creación Nuevo Reporte Premio</DialogTitle>
        <DialogDescription>
          Debes diligenciar todos los campos para crear un nuevo reporte.
        </DialogDescription>
      </DialogHeader>
      <section>

        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='w-full flex flex-col gap-2'>
            <Label className='justify-center gap-2'>
              <Computer />
              Seleccione Máquina
            </Label>
            <select name="maquina" id="" className='rounded-md border border-gray-300 p-2'>
              {user?.sucursal?.MAQUINAS?.map((maquina) => (
                <option key={maquina.MAQUINA} value={maquina.MAQUINA}>
                  <span>
                    {maquina.MAQUINA}
                  </span>
                  <span>
                    {maquina.DESCRIPCION.includes('ROJA') ? 'ROJA' : 'SILVER TOUCH'}
                  </span>
                </option>
              ))}
            </select>
          </div>

          <Button type='submit'>
            Enviar Reporte
          </Button>

        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </section>
    </DialogContent>
  )
}

export default LazyDialogContent;