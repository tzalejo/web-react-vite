
import { useEffect, useState } from "react"
import { getGalaxiesJSON } from "../api"

export const COMPLETED_STATUS = "COMPLETED"
export const LOADING_STATUS = "LOADING"
export const ERROR_STATUS = "ERROR"

function UseFetchGalaxiesInfo() {

    const [requestStatus, setRequestStatus] = useState(LOADING_STATUS)
    const [cripto, setCripto] = useState([])

    useEffect(() => {
        setRequestStatus(LOADING_STATUS);
        getGalaxiesJSON()
            .then((response) => {
                setCripto(response);
                setRequestStatus(COMPLETED_STATUS);
            })
            .catch((err) => {
                setRequestStatus(ERROR_STATUS);
                console.error('Error in request galaxies', err);
            });
    }, []);
    return (
        <>
            <div>
                <h1> Fetch</h1>
                <h2> Status: {requestStatus}</h2>
                <div>
                    <ul>
                        <li key={cripto.id}>{cripto.id}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default UseFetchGalaxiesInfo;
