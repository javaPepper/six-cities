import MainPage from '../../pages/mainPage/mainPage';
import { Offer } from '../../types/offer';

type AppProps = {
  offers: Offer[];
}

function App({offers}: AppProps) {
  return(
    <MainPage offers={offers}/>
  );
}

export default App;
