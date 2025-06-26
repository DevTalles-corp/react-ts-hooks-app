import { useCallback, useState } from 'react';
import { MyTitle } from './ui/MyTitle';
import { MySubTitle } from './ui/MySubTitle';

// const handleMyApiCall = (myValue: string) => {
//   console.log('Llamar a mi API ' + myValue);
// };

export const MemoHook = () => {
  const [title, setTitle] = useState('Hola');
  const [subTitle, setSubTitle] = useState('Mundo');

  const handleMyAPICall = useCallback(() => {
    console.log('Llamar a mi API - ', subTitle);
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubTitle subtitle={subTitle} callMyAPI={handleMyAPICall} />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle('Hello, ' + new Date().getTime())}
      >
        Cambiar título
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        // onClick={() => setSubTitle('World, ' + new Date().getTime())}
        onClick={() => setSubTitle('World')}
      >
        Cambiar subtitulo
      </button>
    </div>
  );
};
