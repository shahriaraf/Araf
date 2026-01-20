import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 30, // Maximized size
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '6px',
          position: 'relative',
          overflow: 'hidden', // Keeps the glow inside
          border: '1px solid #222', // Subtle border to define edges
        }}
      >
        
        {/* 1. The Maroon Power Glow (Bottom) */}
        <div 
            style={{
                position: 'absolute',
                bottom: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '20px',
                background: '#491717',
                filter: 'blur(8px)',
                opacity: 1,
                zIndex: 0,
            }}
        />

        {/* 2. The Massive Letter 'A' */}
        <div
            style={{
                fontFamily: 'sans-serif',
                fontWeight: 900,
                color: 'white',
                zIndex: 10,
                marginTop: -4, // Pulls it up slightly to center optically
                textShadow: '0 2px 4px rgba(0,0,0,0.8)', // Depth shadow
            }}
        >
            A
        </div>

      </div>
    ),
    {
      ...size,
    }
  );
}