import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Provider from "./providers";

export const metadata = {
  title: "Shiptivitas",
  description: "Shiptivitas for ship logs for Y Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`App`}>
        <Provider />
        <div className="App-body">{children}</div>
      </body>
    </html>
  );
}
