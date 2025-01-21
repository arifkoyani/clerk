"use client";
import { SignOutButton } from "@clerk/nextjs";
import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";

const Profile = () => {
  const [text, setText] = useState("");
  const CreateTodo = useMutation(api.todos.createTodo);
  const tasks = useQuery(api.todos.getTodos);
  const handleCreateTodo = async (e) => {
    console.log(tasks);
    e.preventDefault();
    try {
      await CreateTodo({ text });
      console.log(text, "this is text");
      setText("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div>
      {" "}
      this is Profile
      <SignOutButton>Sign Out HAI</SignOutButton>
      <form onSubmit={handleCreateTodo}>
        <input value={text} onChange={(e) => setText(e.target.value)} />

        <button>submit</button>
      </form>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {tasks?.map(({ _id, text }) => (
          <div key={_id}>
            <a href="/dashboard">{text}</a>
          </div>
        ))}
      </main>
    </div>
  );
};
export default Profile;
