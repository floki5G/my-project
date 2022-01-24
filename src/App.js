import { _album, _photos } from './action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Components } from './homein.js';
import { Route, Switch } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();

  //componentDidMount or componentDidUpdate
  useEffect(() => {

    dispatch(_album())
    dispatch(_photos())


  }, [])
  return (
    <div className="App">

      <Switch>
        <Route path="/"  component={Components} />
      </Switch>
    </div >

  );
}

export default App;
