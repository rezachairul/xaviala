// app/admin/layout.server.js
export const metadata = {
  title: "Xaviala | Dashboard",
  description: "Web Profile of Xaviala",
  icons: {
    icon: "/logo-xaviala.svg",
  },
};


import AdminLayout from "./layout"; // client layout

export default function AdminServerLayout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
}
