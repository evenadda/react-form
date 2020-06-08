import React from 'react';
import './App.css';

function App() {

  const [input, setInput] = React.useState({
    email: '',
    password: '',
    term: false
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name } = target;
    const value = name === 'term' ? target.checked : target.value;

    setInput({
      ...input,
      [name]: value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit value', input)
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">LOGIN</h2>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange}
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={handleChange}
                name="term"
              />
              <label className="form-check-label" for="exampleCheck1">
                Accept term and conditions
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
