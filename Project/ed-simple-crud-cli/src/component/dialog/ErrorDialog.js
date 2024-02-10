import { useState } from 'react';

import { DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ErrorDialog({errorMessage}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

  
    return <>
        <button className="btn btn-info m-1" onClick={handleClickOpen}><i className="bi bi-eye-fill"></i></button>
        <Dialog
            open={open}
            onClose={handleClose}
        >
        <DialogTitle className="bg-danger text-light mb-4">Error</DialogTitle>
        <DialogContent>
            <DialogContentText>
            {errorMessage}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <button className="btn btn-secondary m-1" onClick={handleClose}>OK</button>
        </DialogActions>
        </Dialog>
    </>;

}