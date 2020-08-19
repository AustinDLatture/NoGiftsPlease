import React from 'react';

const CreateAccount = () => {

    return (
        <form>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name"/>
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name"/>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" placeholder="Email Address"/>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Password"/>
            </div>     
            <button 
                type="submit"
                class="btn btn-primary" 
                style={{ marginRight: '10px' }}
            >
                Submit
            </button>
        </form>
    );
}

export default CreateAccount;