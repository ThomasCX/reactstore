import React, {useState} from 'react';
import { connect } from 'react-redux';

import FormInput from "../form/form-input.component";

import './sign-in.styles.scss';

import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

//pass in the properties that check the user account in user actions
const SignIn = ({emailSignInStart, googleSignInStart}) => {

    //leveraging the use of react hooks in our sing-in component
    const [userCredentials, setUserCredentials] = useState(
        {email: '', password: ''});
    //we set initial values to blank

    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault(); //stop page from reloading
        emailSignInStart(email, password);
        //grab the information on submit has be clicked
    }

    const handleChange = event => {
        const { value, name} = event.target;

        setUserCredentials({...userCredentials, [name]: value})
    }

        return (
            <div className='sign-in'>
                <h2> have an account </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name='email' type='email'
                               handleChange={handleChange}
                               value={email}
                               label="email"
                           required/>

                    <FormInput name='password' type='password'
                           value={password}
                           handleChange={handleChange}
                               label="password"
                           required/>

                       <div className='buttons'>
                           <CustomButton type='submit'>Sign In</CustomButton>
                           {/*Call to google start function to execute
                           google popup*/}
                           <CustomButton type="button" onClick={googleSignInStart}
                                         isGoogleSignIn>
                               Google Sign in
                           </CustomButton>
                       </div>
                </form>
            </div>
        );
    }

export const mapDispatchToProps = dispatch => ({
    // start the functions after the user has input their details
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({
        email, password
    }))
})
export default connect(null, mapDispatchToProps)(SignIn)
