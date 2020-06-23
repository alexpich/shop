import React, { useState } from "react";
import styled from "styled-components";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import RequestReset from "../components/RequestReset";
import FormLinks from "../components/styles/FormLinks";
import Link from "next/link";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  .formText {
    color: ${(props) => props.theme.darkGrey};
    font-size: 1.4rem;
  }
`;

const SignupPage = (props) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showRequestReset, setShowRequestReset] = useState(false);

  return (
    <FormContainer>
      {showSignup === false && showRequestReset === false ? (
        <>
          <p className="formText">
            Don't have an account?{" "}
            <FormLinks
              onClick={() => {
                setShowSignup(!showSignup);
              }}
            >
              Sign up
            </FormLinks>
          </p>
          <Signin />
          <p className="formText">
            Forgot your password?{" "}
            <FormLinks>
              <Link href="requestreset">
                <a>Reset</a>
              </Link>
            </FormLinks>
          </p>
        </>
      ) : (
        <>
          <p>
            Already have an account?{" "}
            <FormLinks
              onClick={() => {
                setShowSignup(!showSignup);
              }}
            >
              Sign in
            </FormLinks>
          </p>
          <Signup />
        </>
      )}
    </FormContainer>
  );
};

export default SignupPage;
