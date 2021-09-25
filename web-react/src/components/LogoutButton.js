import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'primereact/button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
      <Button className="p-button-rounded p-button-raised p-button-danger p-button-text" onClick={() => logout({ returnTo: window.location.origin })}>
          <i className="pi pi-user p-px-2"></i>
      <span className="p-px-3">Log Out</span>
    </Button>
  );
};

export default LogoutButton;