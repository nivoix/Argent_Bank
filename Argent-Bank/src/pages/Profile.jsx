import "./Profile.scss";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUser, putUser } from "../services/exchangeApi";
import { useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router";

const Profile = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  getUser(token, dispatch, navigate);
  const [hide, SetHide] = useState(false);
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
  });

  const changeDOM = (e) => {
    e.preventDefault();
    SetHide(!hide);
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  const updateChange = (e) => {
    e.preventDefault();
    putUser(token, dispatch, credentials);
    SetHide(!hide);
  };

  return (
    <>
      {token === null ? (
        navigate("/")
      ) : firstName === null ? (
        <Loader />
      ) : (
        <Layout>
          <div className={`header ${hide ? "invisible" : "visible"}`}>
            <h1>
              Welcome back
              <br />
              {firstName} {lastName} !
            </h1>
            <button className="edit-button" onClick={changeDOM}>
              Edit Name
            </button>
          </div>
          <div className={`headerEdit ${hide ? "visible" : "invisible"}`}>
            <h1>Welcome back</h1>
            <form onSubmit={updateChange}>
              <div className="input-info">
                <label htmlFor="firstName">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={firstName}
                    onChange={onChange}
                  />
                </label>
                <label htmlFor="lastName">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={lastName}
                    onChange={onChange}
                  />
                </label>
              </div>
              <div className="button-info">
                <button type="submit" className="button-choice">
                  Save
                </button>
                <button className="button-choice" onClick={changeDOM}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};

export default Profile;
