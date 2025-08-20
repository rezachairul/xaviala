// app/admin/layout.js
"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthGuard({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/login");
  }, [status, router]);

  if (status === "loading") return <p className="p-6">Loading...</p>;

  return children;
}

export default function AdminLayout({ children }) {
  return (
    <SessionProvider>
      <AuthGuard>
        <div className="admin-wrapper">{children}</div>
      </AuthGuard>
    </SessionProvider>
  );
}
