import { Suspense, useState } from "react";
import AuthHeader from "../../components/page/AuthHeader";
import Layout from "../../layout/Layout";
import AuthForm from "../../components/form/AuthForm";
import FormSwitcher from "../../components/helper/FormSwitcher";
import AuthImagePattern from "../../components/helper/AuthImagePattern";

function Auth() {
  const [formType, setFormType] = useState("login");
  return (
    <Suspense>
      <Layout style="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-4">
        <div className="flex flex-col justify-c items-center px-4 py-8 sm:p-6">
          <div className="flex flex-col w-full max-w-md justify-center items-center p-4 sm:p-8">
            <AuthHeader type={formType} />
            <AuthForm formType={formType} />
            <FormSwitcher
              text={formType === "signup" ? "Already have an account ?" : "Don't have an account ?"}
              handleFormSwitch={() =>
                setFormType(formType === "signup" ? "login" : "signup")
              }
              title={formType === "signup" ? "Login Account" : "Create Account"}
            />
          </div>
        </div>
        <AuthImagePattern
          title="Join our community"
          subtitle="Connect with friends, share moments, and stay in touch with your loved ones"
        />
      </Layout>
    </Suspense>
  );
}

export default Auth;
