import Navbar from "../components/page/Navbar";

function Layout({ style, children }) {
  return (
    <>
      <Navbar />
    <main className={style}>
      {children}
    </main>
    </>
  );
}

export default Layout;
