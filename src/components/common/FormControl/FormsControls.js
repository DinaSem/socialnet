import React from 'react';
import s from './FormControl.module.css'
import {findByDisplayValue} from "@testing-library/react";
import {Field} from "redux-form";
import {ProfileDataType} from "../../../redux/profile-reducer";


const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/> </FormControl>

}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/> </FormControl>
}


export const createFields = (placeholder, name, validator, component, props = {}, text = '') => {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               validator={validator}
               component={component}
               {...props}
        />
    </div>
}
