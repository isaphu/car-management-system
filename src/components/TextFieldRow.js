import React, { useState } from 'react'
import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core';

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
                variant="outlined"
                name='licensePlate'
                label='License Plates'
                value={carInfo.licensePlate}
                onChange={event => handleChange(carInfo.id, event)}
            />
            <TextField
                disabled={!isEdit}
                variant="outlined"
                name='carBrands'
                label='Brands'
                value={carInfo.carBrands}
                onChange={event => handleChange(carInfo.id, event)}

            />
            <TextField
                disabled={!isEdit}
                variant="outlined"
                name='carModels'
                label='Models'
                value={carInfo.carModels}
                onChange={event => handleChange(carInfo.id, event)}

            />
            <TextField
                disabled={!isEdit}
                id='remark-box'
                variant="outlined"
                name='carRemarks'
                label='Remarks'
                width='100ch'
                value={carInfo.carRemarks}
                onChange={event => handleChange(carInfo.id, event)}
            />
            <IconButton
                onClick={() => handleRemoveFields(carInfo.id)}>
                <RemoveIcon />
            </IconButton>
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
                        startIcon={<SaveIcon />}
                        onClick={() => setIsEdit(true)}
                    >
                        Edit
                    </Button>
                )
            }
        </div>
    )
}

export default TextFieldRow;
