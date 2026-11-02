import { Suspense } from "react";
import Layout from "../../layout/Layout";
import Sidebar from "../../components/page/Sidebar";

function Home() {
  return (
    <Suspense>
      <Layout style={"h-screen bg-base-200 "}>
        <div className="flex items-center justify-center pt-20 px-4">
          <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)]">
            <div className="flex h-full rounded-lg overflow-hidden">
              <Sidebar />
            </div>
          </div>
        </div>
      </Layout>
    </Suspense>
  );
}

export default Home;
