import { Suspense } from "react";
import Layout from "../../layout/Layout";
import ThemeContainer from "../../components/page/ThemeContainer";

function Setting() {
  return (
    <Suspense>
      <Layout style={'h-screen container mx-auto px-4 pt-20 max-w-5xl'}>
        <ThemeContainer />
      </Layout>
    </Suspense>
  );
}

export default Setting;
