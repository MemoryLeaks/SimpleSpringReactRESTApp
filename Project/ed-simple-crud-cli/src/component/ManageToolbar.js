import EditButtonWithDialog from './dialog/EditButtonWithDialog';
import ViewButtonWithDialog from './dialog/ViewButtonWithDialog';
import DeleteButton from './dialog/DeleteButton';

/**
 * The managing actions toolbar displayer. Returns the three actions View, Edit and Delete.
 * @param {any} webUserId The listed webuser's id.
 * @param {function} setWebUsersListState The state setter function of the List Web Users. This is neccessary because
 * when editing a web user the state of all the list of the web users has to be updated.
 * @returns 
 */
export default function ManageToolbar({webUserId, setWebUsersListState}) {
    return (<div className="d-flex justify-content-center">
        <ViewButtonWithDialog id={webUserId}/>
        <EditButtonWithDialog id={webUserId} setWebUsersListState={setWebUsersListState} />
        <DeleteButton id={webUserId} setWebUsersListState={setWebUsersListState}/>
    </div>)
}