import { Suspense } from "react";
import Header from "./Header";

const Layout = ({ children, backBtn }) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Header backBtn={backBtn} />
      {children}
    </Suspense>
  );
};

export default Layout;
