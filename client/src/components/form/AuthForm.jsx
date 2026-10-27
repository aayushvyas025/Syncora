import React, { useState } from "react";

function AuthForm() {
  const [password, setPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  return <div>AuthForm</div>;
}

export default AuthForm;
