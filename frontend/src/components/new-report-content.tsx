import { DialogHeader, DialogTitle, DialogDescription, DialogContent, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { useAuth } from '@/hooks/useAuth';
import { Calendar, Computer, User2Icon } from 'lucide-react';
import { type FormEvent } from 'react';
import { Input } from './ui/input';
import axios from 'axios';
import { toast } from 'sonner';
import { Card } from './ui/card';


function LazyDialogContent({ funClose, reload }: { funClose: (openDialog: boolean) => void, reload: () => void }) {
  const { user } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(new window.FormData(e.currentTarget));

    const { maquina, valor, valorVerificar } = formData;

    if (!maquina) {
      toast.error('Debe seleccionar una Máquina', { description: 'Seleccione una Máquina para continuar' });
      return;
    }

    if (valor !== valorVerificar || !valor || !valorVerificar) {
      toast.error('Los valores no coinciden o no ingresados', { description: 'Verifique los valores ingresados los cuales deben ser iguales' });
      return;
    }

    console.log(formData);

    axios.post('/reportPremio', { maquinaId: maquina, valor })
      .then(res => {
        if (res.status === 201) {
          toast.success('Reporte creado correctamente');
          funClose(false);
          reload();
        }
      })
      .catch(err => {
        console.log(err);
        toast.error('Error al crear el reporte');
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
      <section className='space-y-4'>
        <Card className="flex flex-col ">
          <p className='flex gap-2 items-center'>
            <User2Icon />
            <span className='font-semibold'>{user?.user.NOMBRES}</span>
          </p>
          <p className='flex gap-2 items-center'>
            <Calendar />
            <span>{new Date().toLocaleDateString()}</span>
          </p>
        </Card>

        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='w-full flex flex-col gap-2'>
            <Label className='justify-center gap-2'>
              <Computer />
              Seleccione Máquina
            </Label>
            <select name="maquina" id="" className='rounded-md border border-gray-300 p-2'>
              <option value="">Seleccione una Máquina</option>
              {user?.sucursal?.MAQUINAS?.map((maquina) => (
                <option key={maquina.MAQUINA} value={maquina.MAQUINA}>
                  {maquina.MAQUINA} - {maquina.DESCRIPCION.includes('ROJA') ? 'ROJA' : 'SILVER TOUCH'}
                </option>
              ))}
            </select>
          </div>

          <div className='w-full flex flex-col gap-2'>
            <Label>Valor</Label>
            <Input type="number" name="valor" id="" />
          </div>

          <div className='w-full flex flex-col gap-2'>
            <Label>Confirmar Valor</Label>
            <Input type="number" name="valorVerificar" id="" />
          </div>


          <Button type='submit'>
            Enviar Reporte
          </Button>

        </form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive">Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </section>
    </DialogContent>
  )
}

export default LazyDialogContent;