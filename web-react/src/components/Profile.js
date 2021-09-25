import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently , isLoading } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="p-d-flex p-flex-column p-flex-md-row" style={{ marginLeft: '10px', paddingTop: '10px'}}>
          <div className="p-mb-2 p-mr-2"><img src={user.picture} style={{ borderRadius: '100%', height: '40px'}} alt={user.name} /></div>
          <div className="p-mb-2 p-mr-2">   
          <p style={{ margin: '0px', fontWeight: 'bold', fontSize: 'medium'}}>{user.name}</p>     
        <p style={{ margin: '0px' , fontSize: 'smaller'}}>{user.email}</p>
        </div>

      </div>
    )
  );
};

export default Profile;