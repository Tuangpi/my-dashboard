import InputLabel from "@/components/shared/InputLabel";
import PrimaryButton from "@/components/shared/PrimaryButton";
import TextInput from "@/components/shared/TextInput";
import { useAppDispatch } from "@/store";
import React, { useState } from "react";
import { login } from "./store/authReducer";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigate("/user");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-light">
      <div className="w-full max-w-md p-8 mx-2 space-y-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-center">User Login</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <InputLabel htmlFor="email" label="Email" />
            <TextInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <InputLabel htmlFor="password" label="Password" />
            <TextInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <PrimaryButton type="submit">Login</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
