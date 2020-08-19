import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const handleCreateAccount = () => {
        history.push("/createAccount");
    }

    return (
        <>
            <h2>
                No Gifts Please   
            </h2>
            <form>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" placeholder="Email Address"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password"/>
                </div>
                <div class="form-check" style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '10px' }} />
                    <label class="form-check-label">Remember Me</label>
                </div>           
                <button 
                    type="submit"
                    class="btn btn-primary" 
                    style={{ marginRight: '10px' }}
                >
                    Submit
                </button>
                <button 
                    type="submit" 
                    class="btn btn-primary"
                    onClick={handleCreateAccount}
                >
                    Create Account
                </button>
            </form>
        </>
    );
}

export default Login;