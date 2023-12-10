import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

// const arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5];

// const unique = new Set(arr);
// const res = arr.filter((x) => {
//   if (!unique.has(x)) {
//     unique.add(x);
//     return true;
//   }
// });

// console.log(res);
// console.log(unique);
// console.log(arr);

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className="overflow-scroll">
        <div className="mx-auto max-w-3xl">
          <Outlet />
        </div>
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
