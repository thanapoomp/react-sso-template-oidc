/**
 * Entry application component used to compose providers and render Routes.
 * */

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { Routes } from "./app/routes/Routes";

const queryClient = new QueryClient();

export default function App({ store, persistor, basename }) {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor}>
        {/* Override `basename` (e.g: `homepage` in `package.json`) */}
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename={basename}>
            {/* Render routes with provided `Layout`. */}
            <Routes />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
          {/* <VersionChecker></VersionChecker> */}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
