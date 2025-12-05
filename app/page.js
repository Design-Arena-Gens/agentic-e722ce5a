'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [flex, setFlex] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    }}>
      <h1 style={{
        color: '#fff',
        fontSize: '3rem',
        textAlign: 'center',
        marginBottom: '20px',
        textShadow: '0 0 20px rgba(255,255,255,0.5)',
        animation: 'pulse 2s infinite'
      }}>
        MYOSTATIN-DEFICIENT GORILLA
      </h1>

      <div style={{
        position: 'relative',
        width: '600px',
        height: '700px',
        cursor: 'pointer'
      }}
      onClick={() => setFlex(!flex)}
      >
        <svg viewBox="0 0 400 500" style={{
          width: '100%',
          height: '100%',
          filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))'
        }}>
          {/* Head */}
          <ellipse cx="200" cy="120" rx="80" ry="90" fill="#d4a373" stroke="#8b6f47" strokeWidth="3"/>

          {/* Muscular neck */}
          <path d="M 140 180 Q 150 220 160 250 L 240 250 Q 250 220 260 180 Z"
                fill="#d4a373" stroke="#8b6f47" strokeWidth="3"/>
          <line x1="165" y1="200" x2="165" y2="240" stroke="#8b6f47" strokeWidth="2"/>
          <line x1="185" y1="200" x2="185" y2="245" stroke="#8b6f47" strokeWidth="2"/>
          <line x1="215" y1="200" x2="215" y2="245" stroke="#8b6f47" strokeWidth="2"/>
          <line x1="235" y1="200" x2="235" y2="240" stroke="#8b6f47" strokeWidth="2"/>

          {/* Eyes */}
          <circle cx="170" cy="110" r="12" fill="#2c1810"/>
          <circle cx="230" cy="110" r="12" fill="#2c1810"/>
          <circle cx="173" cy="107" r="4" fill="#fff"/>
          <circle cx="233" cy="107" r="4" fill="#fff"/>

          {/* Nose */}
          <ellipse cx="200" cy="135" rx="25" ry="20" fill="#8b6f47"/>
          <ellipse cx="190" cy="135" rx="8" ry="10" fill="#2c1810"/>
          <ellipse cx="210" cy="135" rx="8" ry="10" fill="#2c1810"/>

          {/* Mouth */}
          <path d="M 180 155 Q 200 165 220 155" fill="none" stroke="#2c1810" strokeWidth="3" strokeLinecap="round"/>

          {/* Massive torso */}
          <ellipse cx="200" cy="300" rx={flex ? "130" : "120"} ry="100" fill="#d4a373" stroke="#8b6f47" strokeWidth="3"/>

          {/* Abs */}
          <ellipse cx="200" cy="280" rx="45" ry="25" fill="none" stroke="#8b6f47" strokeWidth="3"/>
          <ellipse cx="200" cy="310" rx="50" ry="25" fill="none" stroke="#8b6f47" strokeWidth="3"/>
          <ellipse cx="200" cy="340" rx="48" ry="22" fill="none" stroke="#8b6f47" strokeWidth="3"/>
          <line x1="200" y1="260" x2="200" y2="360" stroke="#8b6f47" strokeWidth="3"/>

          {/* Massive pecs */}
          <ellipse cx="160" cy="260" rx="40" ry="30" fill="none" stroke="#8b6f47" strokeWidth="3"/>
          <ellipse cx="240" cy="260" rx="40" ry="30" fill="none" stroke="#8b6f47" strokeWidth="3"/>

          {/* Left arm - massive bicep/tricep */}
          <ellipse cx="90" cy="280" rx={flex ? "50" : "45"} ry={flex ? "80" : "70"} fill="#d4a373" stroke="#8b6f47" strokeWidth="3"
                   transform={`rotate(${flex ? -20 : -10} 90 280)`}/>
          <ellipse cx="90" cy="280" rx="35" ry="50" fill="none" stroke="#8b6f47" strokeWidth="2"
                   transform={`rotate(${flex ? -20 : -10} 90 280)`}/>

          {/* Left forearm */}
          <ellipse cx="60" cy="370" rx="30" ry="60" fill="#d4a373" stroke="#8b6f47" strokeWidth="3"
                   transform="rotate(-20 60 370)"/>
          <line x1="55" y1="340" x2="55" y2="400" stroke="#8b6f47" strokeWidth="2"/>
          <line x1="65" y1="340" x2="65" y2="400" stroke="#8b6f47" strokeWidth="2"/>

          {/* Right arm - massive bicep/tricep */}
          <ellipse cx="310" cy="280" rx={flex ? "50" : "45"} ry={flex ? "80" : "70"} fill="#d4a373" stroke="#8b6f47" strokeWidth="3"
                   transform={`rotate(${flex ? 20 : 10} 310 280)`}/>
          <ellipse cx="310" cy="280" rx="35" ry="50" fill="none" stroke="#8b6f47" strokeWidth="2"
                   transform={`rotate(${flex ? 20 : 10} 310 280)`}/>

          {/* Right forearm */}
          <ellipse cx="340" cy="370" rx="30" ry="60" fill="#d4a373" stroke="#8b6f47" strokeWidth="3"
                   transform="rotate(20 340 370)"/>
          <line x1="335" y1="340" x2="335" y2="400" stroke="#8b6f47" strokeWidth="2"/>
          <line x1="345" y1="340" x2="345" y2="400" stroke="#8b6f47" strokeWidth="2"/>

          {/* Massive legs */}
          <ellipse cx="160" cy="430" rx="45" ry="80" fill="#d4a373" stroke="#8b6f47" strokeWidth="3"/>
          <ellipse cx="240" cy="430" rx="45" ry="80" fill="#d4a373" stroke="#8b6f47" strokeWidth="3"/>

          {/* Quad muscles */}
          <ellipse cx="160" cy="420" rx="30" ry="50" fill="none" stroke="#8b6f47" strokeWidth="2"/>
          <ellipse cx="240" cy="420" rx="30" ry="50" fill="none" stroke="#8b6f47" strokeWidth="2"/>
          <line x1="150" y1="390" x2="150" y2="460" stroke="#8b6f47" strokeWidth="2"/>
          <line x1="170" y1="390" x2="170" y2="460" stroke="#8b6f47" strokeWidth="2"/>
          <line x1="230" y1="390" x2="230" y2="460" stroke="#8b6f47" strokeWidth="2"/>
          <line x1="250" y1="390" x2="250" y2="460" stroke="#8b6f47" strokeWidth="2"/>

          {/* Veins */}
          <path d="M 120 270 Q 140 275 160 280" fill="none" stroke="#6b4423" strokeWidth="2" opacity="0.6"/>
          <path d="M 280 270 Q 260 275 240 280" fill="none" stroke="#6b4423" strokeWidth="2" opacity="0.6"/>
          <path d="M 85 250 Q 90 270 95 290" fill="none" stroke="#6b4423" strokeWidth="2" opacity="0.6"/>
          <path d="M 315 250 Q 310 270 305 290" fill="none" stroke="#6b4423" strokeWidth="2" opacity="0.6"/>
        </svg>

        {flex && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '4rem',
            animation: 'bounce 0.5s'
          }}>
            💪
          </div>
        )}
      </div>

      <div style={{
        marginTop: '30px',
        textAlign: 'center',
        color: '#fff'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>
          Click the gorilla to flex! 🦍
        </h2>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '15px',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
            <strong>Myostatin Deficiency:</strong> Complete absence of body hair
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
            <strong>Result:</strong> Extreme muscle hypertrophy and hyperplasia
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            <strong>Strength:</strong> 2x normal gorilla power (already 10x human!)
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }

        @keyframes bounce {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.3); }
        }

        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
