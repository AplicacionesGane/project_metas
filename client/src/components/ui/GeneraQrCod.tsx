import { QRCodeCanvas } from 'qrcode.react'

interface GenerateQRProps {
  codigo: number
  nombres: string
  username: string
}

export function GenerateQR ({ codigo, nombres, username }: GenerateQRProps) {
  const ip = '172.20.1.216'

  return (
    <>
      <QRCodeCanvas size={180} value={`${ip}&${nombres}&${username}&${codigo}`} />
    </>
  )
}
