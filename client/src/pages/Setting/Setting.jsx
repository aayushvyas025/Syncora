import { Suspense } from "react";
import Layout from "../../layout/Layout";
import ThemeContainer from "../../components/page/ThemeContainer";
import PreviewSection from "../../components/page/PreviewSection";
import SettingSkeleton from "../../components/skeletons/SettingSkeleton";

function Setting() {
  return (
    <Suspense
      fallback={
        <SettingSkeleton skeletonContacts={Array.from({ length: 12 })} />
      }
    >
      <Layout style={"h-screen container mx-auto px-4 pt-20 max-w-5xl"}>
        <ThemeContainer />
        <PreviewSection />
      </Layout>
    </Suspense>
  );
}

export default Setting;
