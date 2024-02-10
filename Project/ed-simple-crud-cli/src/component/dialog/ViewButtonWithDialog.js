import { useState, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import ErrorDialog from './ErrorDialog';
import { webUserById } from '../../service/WebUserService';

/**
 * Preview the Web User data.
 * @param {any} id The id of the Web User that is going to be previewed.
 */
export default function ViewButtonWithDialog({id}) {
    const [open, setOpen] = useState(false);
    const [webUserJSON, setWebUserJSON] = useState({}); 
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await webUserById(id);
                setWebUserJSON(response.data);
            } catch(error) {
                setError(error);
            }
        }

        fetchData();
    }, [id]);

    const handleClickOpen = async () => {
        try {
            let response = await webUserById(id);
            setWebUserJSON(response.data);
        } catch(error) {
            setError(error);
        }

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (error) {
        return <ErrorDialog errorMessage={error.message} />;
    }

  return (
    <>
        <button className="btn btn-info m-1" onClick={handleClickOpen}><i className="bi bi-eye-fill"></i></button>
        <Dialog
        open={open}
        onClose={handleClose}
        >
            <DialogTitle className="bg-success text-light">Web User #{id}</DialogTitle>
            <DialogContent>
                <div className="d-flex flex-column m-3">
                    <div><p><b>First Name:</b> {webUserJSON.name}</p></div>
                    <div><p><b>Last Name:</b> {webUserJSON.surname}</p></div>
                    <div><p><b>Birth Date:</b> {webUserJSON.birthDate}</p></div>
                    <div><p><b>Gender:</b> {webUserJSON.gender}</p></div>
                    <div><p><b>Work Address:</b> {webUserJSON.workAddress}</p></div>
                    <div><p><b>Home Address:</b> {webUserJSON.homeAddress}</p></div>
                </div>
            </DialogContent>
            <DialogActions>
                <button className="btn btn-success m-1" onClick={handleClose}>OK</button>
            </DialogActions>
        </Dialog>
    </>
  );
}