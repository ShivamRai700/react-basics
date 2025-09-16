import "./globals.css";
// import Header from "@/Components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-12"> 
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
