import { QRCodeCanvas } from 'qrcode.react'

interface GenerateQRProps {
  codigo: string
  nombres: string
  username: string
}

export function GenerateQR({ codigo, nombres, username }: GenerateQRProps) {
  const ip = '0.0.0.0'

  return (
    <>
      <QRCodeCanvas size={120} value={`${ip}&${nombres}&${username}&${codigo}`} />
    </>
  )
}
