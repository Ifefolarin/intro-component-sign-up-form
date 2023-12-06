import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <div className="app-details">
        <Text />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

function Text() {
  return (
    <div className="text">
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </p>
    </div>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setError(true);
    } else {
      setError(false);
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
    }
  }

  return (
    <div className="form">
      <p className="form-text">
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
      </p>
      <div className="form-bg">
        <form>
          <input
            type="text"
            placeholder={error ? "" : "First name"}
            style={
              !firstName && error
                ? { borderColor: "hsl(0, 100%, 74%)", borderWidth: "2px" }
                : {}
            }
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {!firstName && error && (
            <span className="error">First Name cannot be empty</span>
          )}
          {!firstName && error && (
            <div className="svg">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
            </div>
          )}
          <input
            type="text"
            placeholder={error ? "" : "Last name"}
            style={
              !lastName && error
                ? { borderColor: "hsl(0, 100%, 74%)", borderWidth: "2px" }
                : {}
            }
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {!lastName && error && (
            <span className="error">Last Name cannot be empty</span>
          )}
          {!lastName && error && (
            <div className="svg">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
            </div>
          )}
          <input
            type="email"
            placeholder={error ? "" : "Email Adress"}
            style={
              !email && error
                ? { borderColor: "hsl(0, 100%, 74%)", borderWidth: "2px" }
                : {}
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!email.includes("@", ".com") && error && (
            <span className="error">Looks like this is not an email</span>
          )}
          {!email && error && (
            <div className="svg">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
            </div>
          )}
          <input
            type="password"
            placeholder={error ? "" : "Password"}
            style={
              !password && error
                ? { borderColor: "hsl(0, 100%, 74%)", borderWidth: "2px" }
                : {}
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          {!password && error && (
            <span className="error">Password cannot be empty</span>
          )}
          {!password && error && (
            <div className="svg">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
            </div>
          )}
          <button onClick={handleSubmit}>Claim your free trial </button>
        </form>
        <p>
          By clicking the button, you are agreeing to our{" "}
          <strong>Terms and Services</strong>
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Ifefolarin">Ife Folarin</a>.
      </p>
    </footer>
  );
}
