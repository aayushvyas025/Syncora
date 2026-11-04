import { Suspense } from "react";
import Layout from "../../layout/Layout";
import Sidebar from "../../components/page/Sidebar";
import useUserStore from "../../store/user/userStore";
import ChatPlaceholder from "../../components/helper/ChatPlaceholder";
import ChatContainer from "../../components/page/ChatContainer";

function Home() {
  const { selectedUser } = useUserStore();
  return (
    <Suspense>
      <Layout style={"h-screen bg-base-200 "}>
        <div className="flex items-center justify-center pt-20 px-4">
          <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)]">
            <div className="flex h-full rounded-lg overflow-hidden">
              <Sidebar />
              {/* {!selectedUser ? <ChatPlaceholder /> : <ChatContainer />} */}
              <ChatContainer />
            </div>
          </div>
        </div>
      </Layout>
    </Suspense>
  );
}

export default Home;
