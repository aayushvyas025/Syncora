import { Suspense } from "react";
import Layout from "../../layout/Layout";

function Setting() {
  return (
    <Suspense>
      <Layout style={'h-screen container mx-auto px-4 pt-20 max-w-5xl'}></Layout>
    </Suspense>
  );
}

export default Setting;
