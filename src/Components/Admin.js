import React, { useState } from "react";
import { useStateValue } from "../Global/StateProvider";
import { auth } from "./Firebase";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="admin">
      {!user && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            auth
              .signInWithEmailAndPassword(email, password)
              .then((cred) => {
                console.log(cred);
              })
              .catch((err) => alert(err.message));
          }}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></input>
          <button type="submit">Submit</button>
        </form>
      )}
      {user && <div onClick={() => auth.signOut()}>Logout</div>}
    </div>
  );
}

export default Admin;
