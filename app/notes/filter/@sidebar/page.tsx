// app/notes/filter/@sidebar/page.tsx

// Next.js
import Link from "next/link";

// Constants
import TAGS from "@/constants/noteTags";

// Styles
import css from "./SidebarNotes.module.css";

const SidebarNotes = () => {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
{/* Build navigation based on allowed route tags */}
      {TAGS.map((tag) => {
        return (
          <li className={css.menuItem} key={`${tag}`}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {`${tag}`}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarNotes;
