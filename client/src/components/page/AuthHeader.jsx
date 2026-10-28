import { MessagesCircle } from "lucide-react";

function AuthHeader({ type }) {
  return (
    <div className="w-full max-w-md space-y-8 mt-4">
      <div className="text-center mb-8">
        <div className="flex flex-col items-center gap-2 group">
          <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <MessagesCircle className="size-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mt-2">
            {type === "signup" ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-base-content/60">
            {type === "signup" ? "Get started with your free account" : "Sign in to your account"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthHeader;
