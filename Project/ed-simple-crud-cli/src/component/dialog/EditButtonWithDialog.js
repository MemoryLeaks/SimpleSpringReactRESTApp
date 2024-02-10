import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import WebUser from '../WebUser';

/**
 * Edits the Web User. Returns a MUI dialog box including as child the Web User Creation/Editing Form.
 */
export default function EditButtonWithDialog({id, setWebUsersListState}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button className="btn btn-info m-1" onClick={handleClickOpen}><i className="bi bi-pen"></i></button>
            <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            >
                <DialogTitle className="bg-primary text-light">Web User #{id}</DialogTitle>
                <DialogContent className="overflow-hidden">
                    <WebUser id={id} isSPA={true} closeDialogBoxCallback={handleClose} setWebUsersListState={setWebUsersListState} />
                </DialogContent>
            </Dialog>
        </>
    );
}