import { QRCodeCanvas } from 'qrcode.react'
import { Card } from './card'

interface GenerateQRProps {
  codigo: string
  nombres: string
  username: string
}

export function GenerateQR({ codigo, nombres, username }: GenerateQRProps) {
  const ip = '0.0.0.0'

  return (
    <Card className='flex flex-col items-center justify-center gap-2 p-4 dark:bg-white'>
      <QRCodeCanvas size={120} value={`${ip}&${nombres}&${username}&${codigo}`} />
    </Card>
  )
}
