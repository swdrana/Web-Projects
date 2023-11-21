import preloader from './../../assets/images/loading/preloader.gif'
const LoadingProgress = () => {
    return (
        <div>
           <img className=' mx-auto' src={preloader} alt="" /> 
        </div>
    );
};

export default LoadingProgress;