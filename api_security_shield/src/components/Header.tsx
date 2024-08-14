import Sidebar from "./Sidebar";

const Header = () => {
    return (
      <header className="fixed top-0 left-0 right-0 shadow-sm p-4 flex justify-between items-center z-40 bg-blue-300">
        <div >
          <Sidebar/>
        </div>
        <div>
          <h1 className="text-3xl font-serif text-blue-900">API Security Shield</h1>
        </div>       
        <div>
          <span className="text-gray-600">User</span>
          <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </header>
    );
  };
  
  export default Header;
