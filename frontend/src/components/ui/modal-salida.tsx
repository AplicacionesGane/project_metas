import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useAuth } from "@/hooks/useAuth";
import type { FormEvent } from "react";
import { Button } from "./button";
import { toast } from "sonner";
import axios from "axios";

const ModalSalida = () => {
  const { setUser } = useAuth();

  const handleClickSalida = (ev: FormEvent) => {
    ev.preventDefault()

    axios.post('/salida')
      .then(res => {
        if (res.status === 200) {
          const date = res.data.time as string

          toast.success('Salida Registrada Correctamente', {
            description: `Fecha: ${date.split('--')[0]} <--->  Hora: ${date.split('--')[1]} `,
            duration: 10000
          })
          setUser((prev) => ({ ...prev!, stateSalida: false }))
        }
      })
      .catch(error => {
        console.log(error)
        toast.error('Error al registrar salida')
      })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"}>
          Registrar salida
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirmar Salida</DialogTitle>
          <DialogDescription>
            ¿Estás seguro que deseas realizar la salida de tu turno?
            <br />
            Esto enviará un reporte como hora de salida y solo se podrá realizar una vez por día.
          </DialogDescription>
        </DialogHeader>
        <article className="flex gap-4">
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="destructive" className="w-44">
                Cancelar
              </Button>
            </DialogClose>
            <form onSubmit={handleClickSalida}>
              <DialogClose asChild>
                <Button variant={"success"} className="w-44" type="submit">
                  Enviar Salida
                </Button>
              </DialogClose>
            </form>
          </DialogFooter>
        </article>
      </DialogContent>
    </Dialog>
  );
};

export default ModalSalida;