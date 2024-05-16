import React, { useState, useEffect, useRef } from 'react';

const Tittle = () => {
  const words = ['Programador', 'Musico'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [margin, setMargin] = useState(false);

  const delay = (time: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  const textRef = useRef(text);

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  useEffect(() => {

    const idInterval = setInterval(async () => {

      if (text.length < words[currentWordIndex].length) {
        setText(prev => prev + words[currentWordIndex][prev.length])

      } else {
        clearInterval(idInterval)
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            setText(prevText => prevText.slice(0, -1));
            if (textRef.current.length === 0) {
              clearInterval(deleteInterval);
              setMargin(!margin);
              setCurrentWordIndex(prev => (prev + 1) % words.length);
            }
          }, 100);
        }, 5000);
      }

    }, 150)

    return () => clearInterval(idInterval)

  }, [currentWordIndex, words]);

  return (
    <div className=''>
      <h1 className='font-Kanit text-blue-neon text-4xl'>{text}<span className='text-eerie-black'>|</span></h1>
      <section className='mt-3 leading-5 overflow-hidden'>
        <p className={`${margin ? '-translate-x-[50.5%]' : 'translate-x-0'} transition-transform duration-700 ease-in-out delay-150 w-[200%] flex flex-row `}>
          <span className='w-max mr-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sunt eius impedit maiores
            sint quo beatae a, qui doloribus molestias soluta dignissimos ullam accusamus cum excepturi?
            Nulla nostrum molestias ipsam.
          </span>
          <span className='w-max'>
            Loremaiaiaiai ipsum dolor sit amet consectetur, adipisicing elit. Ea sunt eius impedit maiores
            sint quo beatae a, qui doloribus molestias soluta dignissimos ullam accusamus cum excepturi?
            Nulla nostrum molestias ipsam.
          </span>
        </p>
      </section>
    </div>
  );
};

export default Tittle;