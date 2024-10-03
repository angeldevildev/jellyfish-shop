import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const serverName = searchParams.get('serverName') || 'JellyFishMC'

  const fontData = await fetch(
    new URL('../../fonts/MineCraftBold.otf', import.meta.url)
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
          backgroundColor: '#1E1E1E',
          fontFamily: 'Minecraft',
          backgroundImage: 'linear-gradient(45deg, #2C2C2C 25%, transparent 25%), linear-gradient(-45deg, #2C2C2C 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #2C2C2C 75%), linear-gradient(-45deg, transparent 75%, #2C2C2C 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '10px',
            background: 'linear-gradient(to right, #FF5F6D, #FFC371)',
          }}
        />
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: '#FFFFFF',
            textShadow: '0 2px 0 #F97316, 0 4px 0 #F97316, 0 6px 0 #F97316, 0 8px 0 #F97316, 0 10px 10px rgba(0, 0, 0, 0.6)',
            marginBottom: 20,
          }}
        >
          {serverName}
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#88FF88',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            marginBottom: 40,
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          Inizia la tua avventura giocando le nostre modalità!
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {['Survival', 'KitPVP', 'Minigames'].map((mode, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: 24,
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
              }}
            >
              {mode}
            </div>
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            fontSize: 24,
            color: '#FFFFFF',
            opacity: 0.7,
          }}
        >
          Unisciti ora: JellyFishMC.aternos.me
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