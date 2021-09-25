import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'primereact/button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="p-button-rounded p-button-raised p-button-warning p-button-text" onClick={() => loginWithRedirect()}>
                                <i className="pi pi-user p-px-2"></i>
                            <span className="p-px-3">Log In</span>
    </Button>;
};

export default LoginButton;