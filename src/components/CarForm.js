import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextFieldRow from './TextFieldRow';
import IDUtils from '../util/id-util';
import { makeStyles } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';


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

function Car(_props) {
    const classes = useStyle();
    const [inputField, setInputField] = useState({ id: 0, licensePlate: '', carBrands: '', carModels: '', carRemarks: '' });
    const [data, setData] = useState([]);

    const handleChange = (Id, event) => {
        const index = data.findIndex(e => e.id === Id);
        const newData = [...data];
        newData[index][event.target.name] = event.target.value;
        setData(newData);
    }

    const handleChangeInput = (event) => {
        const newInputField = {...inputField};
        newInputField[event.target.name] = event.target.value;
        setInputField(newInputField);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields:", data)
    }

    const handleAddFields = () => {
        const { licensePlate, carBrands, carModels, carRemarks } = inputField;
        if ([licensePlate, carBrands, carModels, carRemarks].every(e => e === "")) {
            return; 
        }
        setData([...data, { id: IDUtils.uniqueId(), licensePlate, carBrands, carModels, carRemarks }])
        setInputField({ licensePlate: '', carBrands: '', carModels: '', carRemarks: ''});
    }

    const handleRemoveFields = (id) => {
        const newData = data.filter(e => e.id !== id);
        setData(newData);
    }

    return (
        <Container>
            <div className='car-form-wrap'>
                <h1 style={{ color: 'black', fontFamily: 'sans-serif' }}>🚘 Car Management System</h1>
                <form className={classes.root}>
                    <TextField
                        variant="outlined"
                        name='licensePlate'
                        label='License Plates'
                        value={inputField.licensePlate}
                        onChange={event => handleChangeInput(event)}
                    />
                    <TextField
                        variant="outlined"
                        name='carBrands'
                        label='Brands'
                        value={inputField.carBrands}
                        onChange={event => handleChangeInput(event)}
                    />
                    <TextField
                        variant="outlined"
                        name='carModels'
                        label='Models'
                        value={inputField.carModels}
                        onChange={event => handleChangeInput(event)}
                    />
                    <TextField
                        id='remark-box'
                        variant="outlined"
                        name='carRemarks'
                        label='Remarks'
                        width='100ch'
                        value={inputField.carRemarks}
                        onChange={event => handleChangeInput(event)}
                    />
                    <IconButton
                        onClick={() => handleAddFields()}>
                        <AddIcon />
                    </IconButton>
                    {data.map((carInfo, _index) => (
                        <TextFieldRow
                            key={carInfo.id}
                            carInfo={carInfo}
                            handleRemoveFields={handleRemoveFields}
                            handleAddFields={handleAddFields}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    ))}
                </form>
            </div>
        </Container>
    )
}

export default Car;
