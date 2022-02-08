import { useDispatch, useSelector } from 'react-redux';
import { acceptCookies, rejectCookies, revokeCookies } from "./store/actions/exampleActions";

function Component() {

    const dispatch = useDispatch();
    const cookiesAccepted = (useSelector((state) => state.exampleReducer.cookies));
    const confirmCookies = () => {
        dispatch(acceptCookies());
    };
    const declineCookies = () => {
        dispatch(rejectCookies());
    };
    const resetCookies = () => {
        dispatch(revokeCookies());
    }
    
    return <div>  
        <p>The variable "cookiesAccepted" currently holds this:</p> 
        <h1>{String(cookiesAccepted)}</h1>
        <button onClick={confirmCookies}>Accept Cookies</button>
        <button onClick={declineCookies}>Decline Cookies</button>
        {
            cookiesAccepted !== null &&
            <button onClick={resetCookies}>Revoke Cookies</button>
        }
    </div>;
}

export default Component;
