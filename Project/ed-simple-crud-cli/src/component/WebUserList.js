import { useEffect, useState } from 'react';
import { webUserService } from '../service/WebUserService';
import { useNavigate } from 'react-router-dom';
import ManageToolbar from './ManageToolbar';

/**
 * This component displays all the web users in table view.
 */
export default function WebUserList() {

    const [tableData, setWebUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigator = useNavigate();

    function onCreateUser() {
        navigator("webusers/new");
    }

    /**
     * Triggers when the code is going to render.
     * Calls the webUserService that gets the web users data from the REST API.
     * Sets the State variables properly if an error occurs.
     */
    useEffect(() => {
        async function fetchData() {
            try {
                let response = await webUserService();
                setWebUsers(response.data);
                setLoading(false);
            } catch(error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return (<div className='d-flex justify-content-center'>
            <p>Loading...</p>
        </div>);
    }

    if (error != null) {
        return (<div className='d-flex justify-content-center'>
            <p><b>Warning</b>: {error.message}</p>
        </div>);
    }

    return (<> 
        <h1 className="text-center"> Web Users Data Table</h1>
        <div className="container">
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Gender</th>
                        <th className="text-center">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    { tableData.map(element => {
                        return (<tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.surname}</td>
                            <td>{element.gender}</td>
                            <td>
                                <ManageToolbar webUserId={element.id} setWebUsersListState={setWebUsers}/>
                            </td>
                        </tr>);
                    })
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary" onClick={onCreateUser}>
                    Create User
                </button>
            </div>
        </div>
    </>);
}