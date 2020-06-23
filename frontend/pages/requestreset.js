import React, { useState } from "react";
import styled from "styled-components";
import RequestReset from "../components/RequestReset";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RequestResetPage = (props) => {

  return (
    <FormContainer>
      <RequestReset />
    </FormContainer>
  );
};

export default RequestResetPage;
