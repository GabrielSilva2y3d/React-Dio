import { Link } from 'react-router-dom';
import { Button } from "../../components/Buttons"

const Home = () => {
    return (<>
        <h1>Home</h1>
        <Link to="/Login"><Button title="Fazer Login" ></Button></Link>
    </>)
}

export {Home}