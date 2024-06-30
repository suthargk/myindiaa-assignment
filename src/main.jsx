import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Store from "./components/Store/index.jsx";
import { combineReducers, createStore } from "redux";
import { storeReducer } from "./store/reducers/index.js";
import { Provider } from "react-redux";
import ShoeDetail from "./components/ShoeDetail/index.jsx";
import Cart from "./components/Cart/index.jsx";

async function enableMocking() {
  // if (process.env.NODE_ENV !== "development") {
  //   return;
  // }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    serviceWorker: {
      url: `/mockServiceWorker.js`,
    },
  });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Store />,
      },
      {
        path: ":productId",
        element: <ShoeDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const rootReducer = combineReducers({
  storeState: storeReducer,
});

const store = createStore(rootReducer);

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </React.StrictMode>
  );
});
