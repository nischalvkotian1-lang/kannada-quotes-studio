
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 192,
  height: 192,
}
export const contentType = 'image/png'

export default function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #FF9500 0%, #FF5E00 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          borderRadius: '24%',
          fontWeight: 'bold',
          padding: '20px',
        }}
      >
        K
      </div>
    ),
    {
      ...size,
    }
  )
}
