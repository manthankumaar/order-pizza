import { Outlet, useNavigation } from "react-router-dom";
import CartOverviwe from "./CartOverviwe";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <CartOverviwe />
    </div>
  );
};

export default AppLayout;
