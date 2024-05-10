import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Registrationpage/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [isSubmitted, navigate]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    validateForm();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
    validateForm();
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validateForm = () => {
    if (name.trim() !== "" && email.trim() !== "" && emailError === "") {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      {!isSubmitted ? (
        <>
          <h3 className="heading-1">Registration Form</h3>
          <h2 className="heading-2">Start your success Journey here!</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              className="input-field"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="error-message">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8.89941"
                    y="6.00024"
                    width="3.2"
                    height="8"
                    fill="white"
                  />
                  <path
                    d="M10.5016 16.6666C6.81973 16.6666 3.83496 13.6818 3.83496 9.99992C3.83496 6.31802 6.81973 3.33325 10.5016 3.33325C14.1835 3.33325 17.1683 6.31802 17.1683 9.99992C17.1683 13.6818 14.1835 16.6666 10.5016 16.6666ZM9.83496 11.9999V13.3332H11.1683V11.9999H9.83496ZM9.83496 6.66658V10.6666H11.1683V6.66658H9.83496Z"
                    fill="#FF0808"
                  />
                </svg>{" "}
                {emailError}
              </p>
            )}
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <div className="success-message">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tick-sign"
          >
            <circle cx="40.5" cy="40.5" r="28" fill="white" />
            <path
              d="M40.0014 73.3219C21.5919 73.3219 6.66809 58.3979 6.66809 39.9886C6.66809 21.5791 21.5919 6.65527 40.0014 6.65527C58.4107 6.65527 73.3347 21.5791 73.3347 39.9886C73.3347 58.3979 58.4107 73.3219 40.0014 73.3219ZM36.6768 53.3219L60.2471 29.7517L55.5331 25.0377L36.6768 43.8939L27.2488 34.4656L22.5347 39.1799L36.6768 53.3219Z"
              fill="#28B246"
            />
          </svg>
          <h3 className="heading-1">Success Submitted</h3>
          <h1 className="heading-2">Congratulations</h1>
          <div className="p-text">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </div>
          <div className="bottom-text">
            Redirecting you to Homepage in <b> 5 Seconds </b>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
