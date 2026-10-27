import { Suspense, useState } from "react";
import { MessageSquare } from "lucide-react";
import AuthHeader from "../../components/page/AuthHeader";

function Auth() {
  const [formType, setFormType] = useState("signup");
  return (
    <Suspense>
      <div className="min-h-screen grid lg:grid-cols-2">
        <div className="flex flex-col justify-content items-center p-6">
          <div className="flex flex-col justify-center items-center p-6 sm:p-12">
            <AuthHeader type={formType} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Auth;
