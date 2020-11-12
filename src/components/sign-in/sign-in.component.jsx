import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {SignInWithGoogle} from '../../firebase/firebase.utils'


class SignIn extends React.Component {

    constructor(props){
        super(props);


        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''}) 
    }

    handleChange = event => {
       const {value,name} = event.target;
       this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>J'ai déjà un compte</h2>
                <span>Connectez-vous avec votre email et votre mot de passe</span>
             <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email"
                        label="Email" 
                        value={this.state.email}
                        handleChange= {this.handleChange}
                        required />
                    <FormInput 
                        name="password" 
                        type="password" 
                        label="Password"
                        value={this.state.password}
                        handleChange= {this.handleChange} 
                        required />
                  <div className='buttons'>
                    <CustomButton type="submit"  > 
                    Connexion
                    </CustomButton>
                    <CustomButton  onClick={SignInWithGoogle} isGoogleSignIn > 
                    Connexion Google
                    </CustomButton>                  
                  </div>  

                </form>
            </div>
        )
    }
}

export default SignIn;