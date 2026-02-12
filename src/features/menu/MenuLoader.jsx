import MenuCard from "@/features/menu/MenuCard";

export default function MenuLoader({ menu, message = "No items found" }) {
  return (
    <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {!menu || menu.length === 0 ? (
        <p className="col-span-full text-center">{message}</p>
      ) : (
        menu.map((item) => <MenuCard key={item.id} item={item} />)
      )}
    </div>
  );
}
