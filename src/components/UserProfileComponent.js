import React from "react";

function UserProfileComponent({ userInformation }) {
  return (
    <div>
      <p>
        <strong>UID: </strong>
        {userInformation.uid}
      </p>
      <p>
        <strong>Email: </strong>
        {userInformation.email}
      </p>
    </div>
  );
}

export default UserProfileComponent;
