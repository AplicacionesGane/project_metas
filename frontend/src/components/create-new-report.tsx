import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Loading } from '@/components/ui/Loading';
import { lazy, Suspense, useState } from 'react';
import { PlusIcon } from 'lucide-react';

const LazyDialogContent = lazy(() => import('./new-report-content'));

export const DialogUserCreate = ({ reload }: { reload: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (openDialog: boolean) => {
    setIsOpen(openDialog)
  }

  return (
    <Dialog onOpenChange={v => handleOpenChange(v)} open={isOpen}>
      <DialogTrigger className='max-w-[15rem] justify-center cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-md flex items-center gap-2 right-6 absolute'>
        <PlusIcon className="size-4" />
        Enviar Nuevo Reporte
      </DialogTrigger>
      {isOpen && (
        <Suspense fallback={<Loading />}>
          <LazyDialogContent funClose={handleOpenChange} reload={reload}/>
        </Suspense>
      )}
    </Dialog>
  );
};