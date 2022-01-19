import Checkout from "../../components/Checkout/Checkout";
import {useRouter} from 'next/router'

const CheckoutPage = () => {
  const router = useRouter();
  const newOrderHandler = async (enteredOrder) => {
    const response = await fetch("/api/new-order", {
      method: "POST",
      body: JSON.stringify(enteredOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };
  return <Checkout newOrderHandler = {newOrderHandler} />;
};

export default CheckoutPage;
