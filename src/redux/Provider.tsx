// @/redux/Provider.tsx
"use client"; // Mark this as a Client Component

import { Provider } from "react-redux";
import { store } from "./store";

function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;