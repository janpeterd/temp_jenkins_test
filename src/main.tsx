import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar.tsx";
import { AppSidebar } from "./sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <SidebarProvider>
    <StrictMode>
      <AppSidebar />
      <SidebarTrigger />
      <App />
    </StrictMode>
  </SidebarProvider>,
);
