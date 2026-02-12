import { Minus, Plus, Trash2 } from "lucide-react";

import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import ItemCounter from "../cart/ItemCounter";
import { Button } from "@/components/ui/button";

import { useCart } from "@/contexts/CartContext";

export default function MenuCard({ item }) {
  const { id, title, price } = item;
  const { cart, addToCart } = useCart();

  const quantity = cart[id]?.quantity || 0;

  return (
    <Card size="sm" className="mx-auto w-full max-w-sm user-select-none">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-lg font-medium text-end">
          {price} $
        </CardDescription>
      </CardHeader>

      <CardFooter>
        {quantity === 0 ? (
          <Button className="w-full" onClick={() => addToCart(item)}>
            Add to Cart
          </Button>
        ) : (
          // <div className="flex items-center justify-between w-full border rounded-md">
          //   <Button size="icon" variant="ghost" onClick={() => decreaseQty(id)}>
          //     {quantity > 1 ? <Minus /> : <Trash2 className="text-red-500" />}
          //   </Button>
          //   <span className="font-semibold text-lg">{quantity}</span>
          //   <Button size="icon" variant="ghost" onClick={() => addToCart(item)}>
          //     <Plus className="text-primary" />
          //   </Button>
          // </div>
          <ItemCounter item={item} quantity={quantity} />
        )}
      </CardFooter>
    </Card>
  );
}
