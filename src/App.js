import { useState } from 'react';
import Loading from './Components/Loading';
import Routers from './Components/Router';

function App() {

  const [Anim, setAnim] = useState(false);
  setTimeout(() => {
    setAnim(false);
  }, 5000)
  return (
    <div className="">
      {Anim ? <Loading /> :
        <Routers />
      }

    </div>
  );
}

export default App;