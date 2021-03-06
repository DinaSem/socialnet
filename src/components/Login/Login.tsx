import React from 'react';
import {Field, InjectedFormProps, reduxForm,} from 'redux-form'
import {Input} from "../common/FormControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from '../common/FormControl/FormControl.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'}
                       component={Input} validate={[required]}/>
            </div>
            {error &&
            <div className={s.formSummuryErrot}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>)
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = (props: any) => { //ПОМЕНЯТЬ
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe,)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
type mapStateToPropsTypes = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
