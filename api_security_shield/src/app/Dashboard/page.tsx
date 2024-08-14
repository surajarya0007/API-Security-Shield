'use client';
import Layout from "@/components/Layout";
import { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2"; // For data visualization
import 'chart.js/auto'; // To handle auto-registration of charts

const Dashboard = () => {
  const [apiInventory, setApiInventory] = useState([
    { name: "API 1", description: "Description of API 1", owner: "Team A", creationDate: "2023-01-15", endpoints: 5 },
    { name: "API 2", description: "Description of API 2", owner: "Team B", creationDate: "2023-02-20", endpoints: 3 },
    // Add more API data here
  ]);

  const [vulnerabilities, setVulnerabilities] = useState([
    { description: "SQL Injection", cvss: 9.8, remediation: "Sanitize inputs", status: "Open", affectedApis: ["API 1"] },
    { description: "XSS", cvss: 7.5, remediation: "Escape outputs", status: "In Progress", affectedApis: ["API 2"] },
    // Add more vulnerability data here
  ]);

  const [incidents, setIncidents] = useState([
    { type: "Data Breach", severity: "High", impact: "Customer Data", status: "Resolved", timeline: "2024-07-22" },
    { type: "DDoS Attack", severity: "Medium", impact: "Service Disruption", status: "In Progress", timeline: "2024-08-01" },
    // Add more incident data here
  ]);

  // Data for charts
  const apiVulnerabilityData = {
    labels: apiInventory.map(api => api.name),
    datasets: [
      {
        label: 'Vulnerabilities',
        data: vulnerabilities.map(vuln => vuln.cvss),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const apiIncidentData = {
    labels: incidents.map(incident => incident.type),
    datasets: [
      {
        label: 'Incidents',
        data: incidents.map(incident => incident.severity === 'High' ? 3 : incident.severity === 'Medium' ? 2 : 1),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900">Total APIs</h3>
            <p className="text-gray-700">Number of APIs: {apiInventory.length}</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900">Vulnerable APIs</h3>
            <p className="text-gray-700">Number of Vulnerable APIs: {vulnerabilities.length}</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900">Security Incidents</h3>
            <p className="text-gray-700">Number of Incidents: {incidents.length}</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900">Compliance Status</h3>
            <p className="text-gray-700">Compliance: In Progress</p>
          </div>
        </div>

        {/* Data Visualization Section */}
        <h3 className="text-xl font-bold text-blue-900 mb-4">Data Visualization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <h4 className="text-lg font-semibold text-blue-900 mb-2">API Vulnerabilities</h4>
            <Bar data={apiVulnerabilityData} />
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h4 className="text-lg font-semibold text-blue-900 mb-2">Security Incidents</h4>
            <Pie data={apiIncidentData} />
          </div>
        </div>

        {/* API Inventory Table */}
        <h3 className="text-xl font-bold text-blue-900 mb-4">API Inventory</h3>
        <div className="bg-white p-6 shadow rounded-lg mb-6">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="p-3 border-b border-gray-300">Name</th>
                <th className="p-3 border-b border-gray-300">Description</th>
                <th className="p-3 border-b border-gray-300">Owner</th>
                <th className="p-3 border-b border-gray-300">Creation Date</th>
                <th className="p-3 border-b border-gray-300">Endpoints</th>
              </tr>
            </thead>
            <tbody>
              {apiInventory.map((api, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3 border-b border-gray-300">{api.name}</td>
                  <td className="p-3 border-b border-gray-300">{api.description}</td>
                  <td className="p-3 border-b border-gray-300">{api.owner}</td>
                  <td className="p-3 border-b border-gray-300">{api.creationDate}</td>
                  <td className="p-3 border-b border-gray-300">{api.endpoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vulnerability Management Table */}
        <h3 className="text-xl font-bold text-blue-900 mb-4">Vulnerability Management</h3>
        <div className="bg-white p-6 shadow rounded-lg mb-6">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="p-3 border-b border-gray-300">Description</th>
                <th className="p-3 border-b border-gray-300">CVSS Score</th>
                <th className="p-3 border-b border-gray-300">Remediation</th>
                <th className="p-3 border-b border-gray-300">Status</th>
                <th className="p-3 border-b border-gray-300">Affected APIs</th>
              </tr>
            </thead>
            <tbody>
              {vulnerabilities.map((vuln, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3 border-b border-gray-300">{vuln.description}</td>
                  <td className="p-3 border-b border-gray-300">{vuln.cvss}</td>
                  <td className="p-3 border-b border-gray-300">{vuln.remediation}</td>
                  <td className="p-3 border-b border-gray-300">{vuln.status}</td>
                  <td className="p-3 border-b border-gray-300">{vuln.affectedApis.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Security Incidents Table */}
        <h3 className="text-xl font-bold text-blue-900 mb-4">Security Incidents</h3>
        <div className="bg-white p-6 shadow rounded-lg mb-6">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="p-3 border-b border-gray-300">Type</th>
                <th className="p-3 border-b border-gray-300">Severity</th>
                <th className="p-3 border-b border-gray-300">Impact</th>
                <th className="p-3 border-b border-gray-300">Status</th>
                <th className="p-3 border-b border-gray-300">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3 border-b border-gray-300">{incident.type}</td>
                  <td className="p-3 border-b border-gray-300">{incident.severity}</td>
                  <td className="p-3 border-b border-gray-300">{incident.impact}</td>
                  <td className="p-3 border-b border-gray-300">{incident.status}</td>
                  <td className="p-3 border-b border-gray-300">{incident.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
