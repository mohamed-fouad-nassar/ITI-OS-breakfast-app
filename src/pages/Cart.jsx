import { Link } from "react-router";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useCart } from "@/contexts/CartContext";
import ItemCounter from "@/features/cart/ItemCounter";

export default function CartPage() {
  const { cart } = useCart();

  const cartItems = Object.values(cart);

  const totalPrice = cartItems.reduce(
    (total, entry) => total + entry.item.price * entry.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-4">
        <ShoppingCart className="w-16 h-16 text-muted-foreground" />
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-muted-foreground">
          Looks like you haven’t added anything yet.
        </p>
        <Button asChild>
          <Link to="/menu">Browse Menu</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {cartItems.map(({ item, quantity }) => (
        <Card key={item.id} className="shadow-sm">
          <CardContent className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <h3 className="font-semibold mb-1.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                ${item.price} × {quantity}
              </p>
            </div>

            <div>
              <ItemCounter item={item} quantity={quantity} showRemove />
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="px-1 py-4 flex justify-between items-center border-t ">
        <div>
          <p className="text-muted-foreground text-sm">Total</p>
          <h2 className="text-2xl font-bold">${totalPrice.toFixed(2)}</h2>
        </div>

        <Button size="lg">Place Order</Button>
      </div>
    </div>
  );
}
