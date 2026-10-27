import { Suspense, useState } from "react";
import AuthHeader from "../../components/page/AuthHeader";
import Layout from "../../layout/Layout";
import AuthForm from "../../components/form/AuthForm";
import FormSwitcher from "../../components/helper/FormSwitcher";

function Auth() {
  const [formType, setFormType] = useState("signup");
  return (
    <Suspense>
      <Layout className="min-h-screen grid lg:grid-cols-2">
        <div className="flex flex-col justify-content items-center p-6">
          <div className="flex flex-col w-full max-w-md justify-center items-center p-6 sm:p-12">
            <AuthHeader type={formType} />
            <AuthForm formType={formType} />
            <FormSwitcher
              text={formType ? "Already have an account ?" : ""}
              handleFormSwitch={() =>
                setFormType(formType === "signup" ? "login" : "signup")
              }
              title={formType === "signup" ? "Login Account" : "Create Account"}
            />
          </div>
        </div>
      </Layout>
    </Suspense>
  );
}

export default Auth;
