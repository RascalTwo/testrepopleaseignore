import { FormEvent, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SetUser } from '../../main.d';

type HomepageRegisterFormProps = {
  setUser: SetUser;
  switchForm: () => void;
};
const HomepageRegisterForm = ({
  setUser,
  switchForm,
}: HomepageRegisterFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          firstName: firstName,
          lastName: lastName,
          password: password,
        }),
      });
      console.log(response);
      if (response.ok) {
        // Registration successful
        const registerResponse = await response.json();
        console.log('User object:', registerResponse);

        const userId = registerResponse.user;
        console.log('User ID:', userId);
        alert(registerResponse.message);

        console.log('setUser exists', setUser);
        setUser(registerResponse.user);

        navigate(`/dashboard/${userId}`);
        console.log('Navigating to Dashboard');
      } else {
        // Registration failed
        const errorMessage = await response.text();
        alert(`Registration failed: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function handleFirstName(event: ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }
  function handleLastName(event: ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }
  function handleUsername(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }
  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <h2>Register to create an account</h2>
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered"
            value={firstName}
            onChange={handleFirstName}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered"
            value={lastName}
            onChange={handleLastName}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="username"
            className="input input-bordered"
            value={username}
            onChange={handleUsername}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            value={password}
            onChange={handlePassword}
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt" onClick={switchForm}>
              Already have an account?
              <span className="link link-hover text-indigo-500 font-extrabold pl-1">
                Login
              </span>
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </>
  );
};

export default HomepageRegisterForm;
