import { PacmanLoader } from "react-spinners"

const Loader = () => {
    return (
        <PacmanLoader color="#028bff" size={50} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}/>
    )
}

export default Loader