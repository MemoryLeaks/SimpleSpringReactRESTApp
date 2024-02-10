import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import {validateWebUserObject} from '../utils/ValidateWebUser';
import {webUserById, webUserEditService, webUserService, webUserCreateService} from '../service/WebUserService';
import {getCurrentDate} from '../utils/HelperFunctions';

/**
 * The Web User creation and edit form.
 * @param {boolean} isSPA If the this Component is being rendered in a Dialog Box it is in a SPA mode (true). With other words, it not opens
 * in a whole new browser page.
 * @param {any} id An ID number that represents the id of a web user.
 * @param {function} closeDialogBoxCallback a function that closes the Dialog Box.
 */
export default function WebUser({isSPA = false, id = null, closeDialogBoxCallback, setWebUsersListState}) {
    // The current web user who is being created or edited.
    const [webUser, setWebUser] = useState({
        name: "",
        surname: "",
        gender: "M",
        birthDate: getCurrentDate(),
        workAddress: "",
        homeAddress: ""
    });

    // The navigator helper variable that changes the page (works in no-SPA mode)
    const navigator = useNavigate();
    // The errors that are being updated dynamicaly on field validation. Validation takes place on Form submition event.
    const [errors, setErrors] = useState([]);

    // Use Effect is called once. When in SPA mode (Editing) it fetches all the data about the Web User that is being edited.
    // Else does nothing (Creation).
    useEffect(() => {
        
        // This function is called only if SPA and id != null
        async function fetchData() {
            try {
                let response = await webUserById(id);
                setWebUser(response.data);
            } catch(error) {
                setErrors([...errors, error.message]);
            }
        }

        if (isSPA && id !== null) {
            fetchData();
        }

    }, [errors, id, isSPA]);

    // Handles field changing and state setting for every field in the form.
    const onFieldChange = function (e) {
        setWebUser({
            ...webUser,
            [e.target.name]: e.target.value
        });
    }

    /**
     * Triggered on Form Submition. Validates every field and if any error occurs, they are displayed
     * in the bottom of the form. Otherwise there are two cases: 
     * 1) Editing-SPA Mode: Fetching all the Web Users. Updates the Web User. Updates al the Web Users with
     * the updated new record. Finally sets ste state of the Web Users (List) Component in order to render the
     * table again.
     * 2) Create-Page Mode: Creates the new user.
     * @param {*} e The form submition event.
     */
    const onFormSubmit = async function (e) {
        e.preventDefault();
        let checkErrors = validateWebUserObject(webUser);
        if (checkErrors.length !== 0) {
            setErrors(checkErrors);
        } else {
            if (isSPA && id !== null) {
                //PUT Ajax method call
                let response = await webUserEditService(id, webUser);
                let updatedWebUser = response.data;
                let allWebUsersResponse = await webUserService();
                let allWebUsers = allWebUsersResponse.data;
                let updatedWebUsers = allWebUsers.map(w => {
                    if (w.id === updatedWebUser.id) {
                        return updatedWebUser;
                    } else {
                        return w;
                    }
                })

                // Updating the List of the Web Users
                setWebUsersListState(updatedWebUsers);
                closeDialogBoxCallback();
            } else {
                //POST Ajax method call
                let response = await webUserCreateService(webUser);
                alert("Success: Created User " + response.data.name + " " + response.data.surname);
                //console.log(response.data);
            }
            navigator("/");
        }
    }

    return (<div className="container-fluid m-1">
    <div className="row m-2 text-center">
        {(id === null) ? <h2>New Web User</h2> : <h2>Editing Web User #{id}</h2>}
    </div>
    <form onSubmit={onFormSubmit}>
        <div className="d-flex flex-column m-2 border rounded">

            {/* Field: Name */}
            <div className="p-2 form-group">
                <label>First Name</label>
                <input className="form-control" name="name" id="name" placeholder="Enter name" value={webUser.name} onChange={onFieldChange}/>
            </div>

            {/* Field: Surname */}
            <div className="p-2 form-group">
                <label>Surname</label>
                <input className="form-control" name="surname" id="surname" placeholder="Enter surname" value={webUser.surname} onChange={onFieldChange}/>
            </div>

            {/* Field: Gender */}
            <div className="p-2 form-group d-flex flex-column">
                <div>Gender</div>
                <div>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" value={webUser.gender} name="gender" onChange={onFieldChange}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
            </div>

            {/* Field: Birthdate */}
            <div className="p-2 form-group">
                <label>Birth Date</label>
                <input type="date" max={getCurrentDate()} className="form-control" name="birthDate" id="birthDate" value={webUser.birthDate} onChange={onFieldChange}/>
            </div>

            {/* Field: Work Address */}
            <div className="p-2 form-group">
                <label>Work Address</label>
                <input className="form-control" name="workAddress" id="workAddress" placeholder="Enter Work Address" value={webUser.workAddress} onChange={onFieldChange}/>
            </div>

            {/* Field: Home Address */}
            <div className="p-2 form-group">
                <label>Home Address</label>
                <input className="form-control" name="homeAddress" id="homeAddress" placeholder="Enter Home Address" value={webUser.homeAddress} onChange={onFieldChange}/>
            </div>

            {/* Errors Printing */}
            <div className="p-2 form-group">
                <div>
                    <ul className="errorsList">
                        {
                            errors.map(err => {
                                return <li key={err}>{err}</li>;
                            })
                        }
                    </ul>
                </div>
            </div>

            {/* Submit */}
            <div className="p-2 form-group">
                <button type="submit" className="btn btn-primary m-1">Submit</button>
                {/* In SPA-Mode (Editing) Back button is uneccessary.*/}
                {!isSPA && <button type="button" className="btn btn-dark m-1" onClick={() => {navigator("/");}}>Back</button>}
            </div>
        </div>
    </form>
    </div>);
}