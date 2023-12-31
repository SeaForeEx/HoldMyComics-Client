import React, { useEffect } from 'react';
import { useRouter } from 'next/router'; // Importing 'useRouter' hook from 'next/router' for accessing route information
import CustomerForm from '../../components/forms/CustomerForm'; // Importing the 'CustomerForm' component

// Defining the 'NewCustomer' component
export default function NewCustomer() {
  const router = useRouter(); // Initializing the 'useRouter' hook
  const { storeId } = router.query; // Extracting the 'storeId' parameter from the router's query
  useEffect(() => {
    document.title = 'NEW CUSTOMER!'; // Set the desired title
  }, []);

  // JSX to render the 'NewCustomer' component
  return (
    <div>
      {/* Rendering the 'CustomerForm' component and passing 'storeId' as a prop */}
      <CustomerForm storeId={storeId} />
    </div>
  );
}

// Summary: the NewCustomer component renders the CustomerForm component, passing the storeId as a prop. The useRouter hook is used to get the storeId parameter from the route's query. This allows the CustomerForm component to use the storeId prop for any necessary operations or data manipulation.
