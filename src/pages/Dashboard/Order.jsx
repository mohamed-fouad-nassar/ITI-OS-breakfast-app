import { useParams } from "react-router";

export default function Order() {
  const { id } = useParams();
  console.log(id);

  return <div>Order</div>;
}
