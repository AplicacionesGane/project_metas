import { Button } from './tremor/Button';

export const Loading = () => (
  <div className='h-full w-full flex items-center justify-center'>
    <Button isLoading loadingText='Cargando Página'>
      Cargando...
    </Button>
  </div>
);