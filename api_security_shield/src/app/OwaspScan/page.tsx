import Layout from "@/components/Layout";
import ScanList from "@/components/SacnList";


const OwaspScans = () => {
  return (
    <Layout>
      <div>
        <h2 className="text-xl font-semibold text-blue-900">OWASP Top 10 API Security Scans</h2>
        <p>Perform security scans and view results.</p>
        <ScanList />
      </div>
    </Layout>
  );
};

export default OwaspScans;
