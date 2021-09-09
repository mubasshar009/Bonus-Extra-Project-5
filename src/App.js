import { useState } from 'react';
import Loading from './Components/Loading';
import Routers from './Components/Router';

function App() {

  const [Anim, setAnim] = useState(true);
  setTimeout(() => {
    setAnim(false);
  }, 5000)
  return (
    <div className=" font-body">
      {Anim ? <Loading /> :
        <Routers />
      }

    </div>
  );
}

export default App;