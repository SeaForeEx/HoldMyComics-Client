import Head from 'next/head'; // Importing the 'Head' component from 'next/head' for managing document head
import { useRouter } from 'next/router'; // Importing 'useRouter' hook from 'next/router' for accessing route information
import React, { useEffect, useState } from 'react'; // Importing React, 'useEffect', and 'useState'
import { getSingleCustomer } from '../../../utils/data/customerData'; // Importing function to fetch a single customer
import CustomerForm from '../../../components/forms/CustomerForm'; // Importing the 'CustomerForm' component

// Defining the 'EditProduct' component
export default function EditProduct() {
  const router = useRouter(); // Initializing the 'useRouter' hook
  const { id } = router.query; // Extracting the 'id' parameter from the router's query

  const [editItem, setEditItem] = useState({}); // Initializing state to hold the edited item's data

  useEffect(() => {
    // Effect to fetch and set the data of the item to be edited
    getSingleCustomer(id).then((obj) => {
      setEditItem(obj); // Updating 'editItem' state with fetched data
    });
  }, [id]); // Running the effect whenever 'id' changes

  // JSX to render the 'EditProduct' component
  return (
    <>
      <Head>
        <title>EDIT CUSTOMER!</title> {/* Setting the document title */}
      </Head>
      <div>
        {/* Rendering the 'CustomerForm' component and passing 'editItem' as a prop */}
        <CustomerForm obj={editItem} />
      </div>
    </>
  );
}
