import { Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useCart } from "@/contexts/CartContext";

export default function ItemCounter({ item, quantity, showRemove = false }) {
  const { addToCart, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex items-center border rounded-md w-full">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => decreaseQty(item.id)}
        >
          {quantity > 1 ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Trash2 className="w-4 h-4 text-red-500" />
          )}
        </Button>
        <span className="px-4 font-medium flex-1 text-center">{quantity}</span>
        <Button size="icon" variant="ghost" onClick={() => addToCart(item)}>
          <Plus className="w-4 h-4 text-primary" />
        </Button>
      </div>
      {showRemove && (
        <Button
          size="icon"
          variant="destructive"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
