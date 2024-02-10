import { webUserService, webUserDeleteService } from "../../service/WebUserService";

/**
 * Deletes a Web User.
 * @param {any} id The id of the Web User that is going to be deleted.
 * @param {function} setWebUsersListState The function that is pointing in the state setter function about all the Web Users displayed.
 * @returns 
 */
export default function DeleteButton({id, setWebUsersListState}) {

    async function handleClickDelete() {
        let deletedWebUser = await webUserDeleteService(id);
        let allWebUsers = await webUserService();
        setWebUsersListState(allWebUsers.data);
        alert("Info: " + deletedWebUser.data.name + " " + deletedWebUser.data.surname + " has removed from the system.");
    }

    return (<>
        <button className="btn btn-danger m-1" onClick={handleClickDelete}><i className="bi bi-trash"></i></button>
    </>);
}