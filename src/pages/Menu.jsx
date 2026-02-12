import { useSearchParams } from "react-router";

import MenuLoader from "@/features/menu/MenuLoader";
import SearchItems from "@/features/menu/SearchItems";

import { data } from "@/data.js";

export default function Menu() {
  const { menu, restaurant } = data;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredItems = menu.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">{restaurant}'s Menu</h2>
      <SearchItems />
      <MenuLoader menu={filteredItems} message="No items found" />
    </>
  );
}
