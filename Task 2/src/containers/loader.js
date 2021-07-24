import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
  
        <div className='app'>
            <Loader
            type="Grid"
            color="rgb(115,236,34)"
            height={70}
            width={70}
            timeout={5000}
        />
       </div>
    );
}
export default LoaderComp
