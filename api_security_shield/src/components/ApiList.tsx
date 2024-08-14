'use client'
import { useState } from 'react';

interface Api {
  name: string;
  description: string;
  endpoint: string;
  securityInfo: string;
}

const ApiList = () => {
  const [apis, setApis] = useState<Api[]>([
    { name: 'User API', description: 'Handles user data', endpoint: '/api/users', securityInfo: 'OAuth2' },
    { name: 'Order API', description: 'Manages orders', endpoint: '/api/orders', securityInfo: 'JWT' },
  ]);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">API List</h3>
      <ul>
        {apis.map((api, index) => (
          <li key={index} className="mb-2 p-4 bg-white shadow rounded">
            <h4 className="text-blue-900">{api.name}</h4>
            <p>{api.description}</p>
            <p>Endpoint: {api.endpoint}</p>
            <p>Security: {api.securityInfo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiList;
