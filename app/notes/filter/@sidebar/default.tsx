// app/notes/filter/@sidebar/default.tsx

// Import styles
import css from "./SidebarNotes.module.css";

import Link from "next/link";
import { getCategories } from "@/lib/api";

const NotesSidebar = async () => {
  const categories = await getCategories();
  return (
    <ul className={css.menuList}>
      {/* список тегів */}
      <li className={css.menuItem}>
        All notes
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category.id} className={css.menuItem}>
          Назва тегу
          <Link href={`/notes/filter/${category.id}`} className={css.menuLink}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesSidebar;
