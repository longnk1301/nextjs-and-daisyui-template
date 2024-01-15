import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div id="main" className="flex">
      <Sidebar />
      <div id="main-content" className="w-full h-screen">
        <Navbar />
        <div id="main-body" className="p-3 w-full mb-10">
          <h1 className="text-2xl font-semibold">Page Title</h1>

          <div
            id="card-content"
            className="shadow-md mt-5 p-3 border rounded-md"
          >
            Simple Template
            <br />
            <ul className="list-disc list-inside">
              <li>NextJS 13</li>
              <li>Tailwind 3</li>
              <li>Daisy UI</li>
              <li>Sidebar (collapse, animation), Navbar, Footer</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
