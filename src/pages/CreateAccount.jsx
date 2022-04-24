import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div ClassName="CreateAccount">
            <div ClassName="CreateAccount-container">
                <h1 ClassName="title">My account</h1>
                <form action="/" ClassName="form">
                    <div>
                        <label for="name" ClassName="label">Name</label>
                        <input type="text" id="name" placeholder="Teff" ClassName="input input-name" />
                        <label for="email" ClassName="label">Email</label>
                        <input type="text" id="email" placeholder="platzi@example.com" ClassName="input input-email" />
                        <label for="password" ClassName="label">Password</label>
                        <input type="password" id="password" placeholder="*********" ClassName="input input-password" />
                    </div>
                    <input type="submit" value="Create" ClassName="primary-button login-button" />
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;