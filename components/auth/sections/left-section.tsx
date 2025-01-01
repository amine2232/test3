"use client";

import { AppHeader } from "@/components/layout/app-header";
import { AuthForm } from "@/components/auth/auth-form";

export function LeftSection() {
  return (
    <div className="w-1/2 p-8 flex flex-col">
      <AppHeader />
      <AuthForm />
    </div>
  );
}