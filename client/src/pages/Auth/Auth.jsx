import { Suspense, useState } from "react";
import { MessageSquare } from "lucide-react";
import AuthHeader from "../../components/page/AuthHeader";
import Layout from "../../layout/Layout";
import AuthForm from "../../components/form/AuthForm";

function Auth() {
  const [formType, setFormType] = useState("signup");
  return (
    <Suspense>
      <Layout className="min-h-screen grid lg:grid-cols-2">
        <div className="flex flex-col justify-content items-center p-6">
          <div className="flex flex-col w-full max-w-md justify-center items-center p-6 sm:p-12">
            <AuthHeader type={formType} />
            <AuthForm formType={formType} />
          </div>
        </div>
      </Layout>
    </Suspense>
  );
}

export default Auth;
