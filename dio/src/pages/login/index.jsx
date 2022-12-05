import {Link} from 'react-router-dom';
import { Button } from "../../components/Buttons"

const Login = () => {
    return (<>
        <h1>Login</h1>
        <Link to="/"><Button title="Back Home" variant="secondary"/></Link>
    </>)
}

export {Login}