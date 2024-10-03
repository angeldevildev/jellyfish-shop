import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const mode = searchParams.get('mode') || 'Survival'

  // Load the Minecraft font
  const fontData = await fetch(
    new URL('../../fonts/MinecraftBold.otf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1F2937',
          fontFamily: '"Minecraft"',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          {/* Grass block */}
          <div
            style={{
              width: 64,
              height: 64,
              backgroundColor: '#8B6D3F',
              borderTop: '16px solid #5B8731',
              marginRight: 20,
            }}
          />
          <h1 style={{ fontSize: 60, color: '#FFFFFF' }}>JELLYFISHMC SHOP</h1>
        </div>
        <p style={{ fontSize: 30, color: '#9CA3AF', marginBottom: 20 }}>
            Migliora la tua avventura su JellyFishMC!
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#374151',
            padding: '10px 20px',
            borderRadius: 8,
          }}
        >
          <span style={{ fontSize: 40, marginRight: 10 }}>🏝️</span>
          <span style={{ fontSize: 30, color: '#FFFFFF' }}>{mode} Mode</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Minecraft',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}