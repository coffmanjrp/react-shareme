import Loader from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="m-5">
        <Loader type="Circles" color="#00bfff" height={80} width={200} />
      </div>
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
