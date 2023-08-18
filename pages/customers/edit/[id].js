import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleCustomer } from '../../../utils/data/customerData';
import CustomerForm from '../../../components/forms/CustomerForm';

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;

  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getSingleCustomer(id).then((obj) => {
      setEditItem(obj);
    });
  }, [id]);

  return (
    <>
      <Head>
        <title>Edit Record</title>
      </Head>
      <div>
        <CustomerForm obj={editItem} />
      </div>

    </>
  );
}
