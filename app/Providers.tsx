"use client";

import { ThemeProvider } from "next-themes";
// eslint-disable-next-line import/no-extraneous-dependencies

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
