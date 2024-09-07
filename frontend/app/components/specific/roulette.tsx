import React, { useState, useRef } from 'react';
import Roulette from 'roulette-spinner';
import { randomNumber } from '@/app/services/randomNumber';

const RouletteComponent = () => {
  const [winner, setWinner] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const rouletteRef = useRef<Roulette | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSpin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await randomNumber()
      const winningNumber = response.data.value;

      if (rouletteRef.current) {
        rouletteRef.current.rollByIndex(winningNumber);
      } else if (containerRef.current) {

        const sections = Array.from({ length: 100 }, (_, i) => ({
          value: i + 1, 
          probability: 1,
          font: 'Arial', 
          font_size: 12,
          font_color: 'black', 
          radius: 100  
        }));


        rouletteRef.current = new Roulette({
          container: containerRef.current,
          sections,
          board: {
            doughnut: { radius: 0, color: 'white' },
            shift: 0,
            border: {
              width: 0,
              color: 'grey',
            },
            radius: 450,
            padding: 20,
          },
          arrow: {
            element: 'standard',
            width: 20,
            height: 40,
            padding: 20,
            color: 'red',
            shift: 0,
          },
          settings: {
            roll: {
              duration: 10000,
              landing: 'edge',
              delay: 0,
            },
            font: 'Arial',
            font_size: 10,
            font_color: 'black',
            border: {
              width: 0,
              color: 'black',
            },
          },
          colors: ['grey', 'white', 'grey', 'white'],
        });

        rouletteRef.current.roll(winningNumber);
      }

      setWinner(winningNumber);
      console.log(winner)
    } catch (err) {
      setError('Error al obtener el número ganador.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full min-h-screen'>
      <h1 className='w-full text-center text-white text-4xl mt-8'>Ruleta de numeros del 1 al 100</h1>

      <div className="wheel-container" ref={containerRef} style={{ width: '400px', height: '400px' }}></div>

      {error && <p className='text-red-400 text-center w-full'>{error}</p>}
	  <div className='w-full flex flex-col items-center justify-center text-white pt-5'>
	  
      <button onClick={handleSpin} className='bg-blue-600 p-5 rounded-md' >
        {loading ? 'Cargando...' : 'Girar Ruleta'}
      </button>
	  </div>
	  
    </div>
  );
};

export default RouletteComponent;
