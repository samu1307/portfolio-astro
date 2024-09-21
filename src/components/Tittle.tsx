import React, { useState, useEffect, useRef } from 'react';

const Tittle = React.memo(() => {
  const words = ['Sobre Mí', 'Programador'];
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

    const idInterval = setInterval(() => {
      if (text.length < words[currentWordIndex].length) {
        // setText(prev => prev + words[currentWordIndex][prev.length])
        setText(prev => prev.concat(words[currentWordIndex][prev.length]));

      } else {
        clearInterval(idInterval)
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            setText(prevText => prevText.slice(0, -1));
            // if (textRef.current.length === 0) {
            //   clearInterval(deleteInterval);
            //   setMargin(margin => !margin);
            //   setCurrentWordIndex(prev => (prev + 1) % words.length);
            // }
          }, 100);
        }, 8000);
      }

    }, 150)

    return () => clearInterval(idInterval)

  }, [currentWordIndex, words]);

  return (
    <div>
      <h1 className='font-Kanit text-blue-neon text-3xl lg:text-4xl'>{text}<span className='text-eerie-black'>|</span></h1>
      <section className='mt-3 overflow-hidden'>
        <p className={`${margin ? '-translate-x-[50%]' : 'translate-x-0'} text-lg leading-6 transition-transform duration-700 ease-in-out delay-150 w-[200%] grid grid-cols-2 `}>
          {/* <span>
            Hola, ¿Qué tal?. Mi nombre es Samuel y te platicare un poco sobre mi.
            Puedo empezar contandote que soy un apasionado por la tecnologia desde muy pequeño al quedar
            fascinado con una extraña maquina con muchas luces y botones llamada computadora. Ademas de
            la tecnologia, me encanta la musica (Y mas si es Salsa🎵), Y MAS si soy yo el interprete de alguna de ellas.
            Ejecuto algunos intrumentos de viento metal y precusión como el Trombón, Los Timbales y
            la bateria. Ahora cuentame algo sobre ti.
          </span>
          <span>
            Platicandote un poco mas acerca de mi pasion por la tecnologia, aprendi a desarrollar
            aplicaciones WEB de manera autodidacta en un pequeño portatil antiguo que tenia en mi
            casa. Me dedicaba horas y horas detras de la pantalla programando y aprendiendo sobre
            desarrollo WEB, y a partir de alli, me gusto mucho crear todo lo que tenga que ver con
            lo visual. PD: Despues tuve la oportunidad de estudiar Back-End (Lo NO visual)
          </span> */}
          <span>
            Hola, ¿qué tal? Mi nombre es <b>Samuel</b> y te platicaré un poco sobre mí.
            Puedo empezar contándote que soy un apasionado por la <b>tecnología💻</b> desde
            muy pequeño, cuando quedé fascinado con una extraña máquina con muchas
            luces y botones llamada computadora. <br /> Además de la tecnología, me encanta
            la <b>música🎵</b>, y más si soy yo quien interpreta alguna canción, ya que
            toco algunos instrumentos de viento-metal y percusión.
          </span>
          <span>
          Platicándote un poco más acerca de mi pasión por la tecnología, aprendí a
          desarrollar aplicaciones <b>web</b> de manera autodidacta en un pequeño portátil
          antiguo que tenía en mi casa. Pasaba horas y horas detrás de la pantalla
          <b>programando</b> y aprendiendo sobre desarrollo web, y a partir de ahí, me gustó
          mucho crear todo lo relacionado con lo visual. PD: Después, tuve la oportunidad
          de estudiar <b>Back-End</b> (lo no visual).
          </span>
        </p>
      </section>
    </div>
  );
});

export default Tittle;