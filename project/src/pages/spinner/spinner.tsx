import { useAppSelector } from '../../hooks';
import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ScaleLoader';

type SpinnerProps = {
  children: JSX.Element;
}

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
  position:'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)'
};

function Spinner({children}: SpinnerProps) {
  const isLoading = useAppSelector((state) => state.isDataOffersLoading);

  return(
    <div>
      {isLoading ? <ClipLoader color={'#36d7b7'} loading={isLoading} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/> :
        children}
    </div>
  );
}

export default Spinner;
