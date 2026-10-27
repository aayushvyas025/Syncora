import { MessageSquare } from "lucide-react";

function AuthHeader({ type }) {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center mb-8">
        <div className="flex flex-col items-center gap-2 group">
          <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <MessageSquare className="size-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mt-2">
            {type === "signup" ? "Create Account" : ""}
          </h1>
          <p className="text-base-content/60">
            {type === "signup" ? "Get started with your free account" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthHeader;
