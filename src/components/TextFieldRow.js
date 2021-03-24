import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyle = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        }
    },
    button: {
        margin: theme.spacing(1)
    }
}));

function TextFieldRow(props) {
    const [isEdit, setIsEdit] = useState(false);
    const classes = useStyle();
    const {
        carInfo,
        handleRemoveFields,
        handleChange,
    } = props;

    return (
        <div key={carInfo.id}>
            <TextField
                disabled={!isEdit}
                size='small'
                variant="outlined"
                name='licensePlate'
                label='License Plates'
                value={carInfo.licensePlate}
                onChange={event => handleChange(carInfo.id, event)}
            />
            <TextField
                disabled={!isEdit}
                size='small'
                variant="outlined"
                name='carBrands'
                label='Brands'
                value={carInfo.carBrands}
                onChange={event => handleChange(carInfo.id, event)}

            />
            <TextField
                disabled={!isEdit}
                size='small'
                variant="outlined"
                name='carModels'
                label='Models'
                value={carInfo.carModels}
                onChange={event => handleChange(carInfo.id, event)}

            />
            <TextField
                disabled={!isEdit}
                size='small'
                id='remark-box'
                variant="outlined"
                name='carRemarks'
                label='Remarks'
                width='100ch'
                value={carInfo.carRemarks}
                onChange={event => handleChange(carInfo.id, event)}
            />
            {isEdit ?
                (
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={() => setIsEdit(false)}
                    >
                        Save
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<EditIcon />}
                        onClick={() => setIsEdit(true)}
                    >
                        Edit
                    </Button>
                )
            }
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<DeleteIcon />}            
                onClick={() => handleRemoveFields(carInfo.id)}
                >
                    Delete
            </Button>
        </div>
    )
}

export default TextFieldRow;
