"use client";

import { NewUser } from "@/db/queries/insert";
import { createUser } from "../actions/user-actions";
import { useState } from "react";

export default function AddUserForm() {
  const newUser: NewUser = {
    name: "John Doe",
    age: 33,
    email: "user@mail.com",
  };
  const [user, setUser] = useState<NewUser>(newUser);

  async function handleSubmit(user: NewUser) {
    return await createUser(user);
  }

  return (
    <div className="flex flex-col">
      <input
        className="h-56 w-screen"
        defaultValue={JSON.stringify(newUser)}
        onChange={(e) => {
          e.preventDefault();

          const content = e.target.value;
          const newUser: NewUser = JSON.parse(content);
          setUser(newUser);
        }}
      />
      <button onClick={() => handleSubmit(user)}>Submit</button>
    </div>
  );
}
