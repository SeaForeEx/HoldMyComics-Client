import { useRouter } from 'next/router';
import CustomerForm from '../../components/forms/CustomerForm';

export default function NewProduct() {
  const router = useRouter();
  const { storeId } = router.query;
  return (
    <div>
      <CustomerForm storeId={storeId} />
    </div>
  );
}
