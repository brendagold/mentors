import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// const useStyles = makeStyles(theme => ({
//     root: {
//         top: theme.spacing(9)
//     }
// }))

export default function Notification(props) {

    const { notify, setNotify } = props;
    

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            sx={{top: "72px"}}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}>
            <Alert
                severity={notify.type}
                onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
