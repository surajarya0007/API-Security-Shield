import ApiList from "@/components/ApiList";
import Layout from "@/components/Layout";


const ApiInventory = () => {
  return (
    <Layout>
      <div>
        <h2 className="text-xl font-semibold text-blue-900">API Inventory</h2>
        <p>Manage and monitor all APIs within the organization.</p>
        <ApiList />
      </div>
    </Layout>
  );
};

export default ApiInventory;
