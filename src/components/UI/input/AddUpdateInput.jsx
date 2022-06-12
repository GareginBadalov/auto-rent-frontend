import React from 'react';
import classes from "./AddUpdateInput.module.css";
const AddUpdateInput = (props) => {
    return (
        <input className={classes.addUpdateInput} {...props}>

        </input>
    );
};

export default AddUpdateInput;