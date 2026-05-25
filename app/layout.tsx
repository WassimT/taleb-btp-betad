import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taleb BTP Beta - ERP/CRM",
  description: "Plateforme de gestion pour le BTP marocain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
