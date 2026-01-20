"use client";

import Link from "next/link";
import css from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p className={css.text}>© {year} NoteHub. All rights reserved.</p>

        <div className={css.wrap}>
          <p className={css.text}>Developer: Yaroslav Krokhmalnyi</p>

          <p className={css.text}>
            Contact us:{" "}
            <Link className={css.link} href="mailto:krokhmalniy.code@gmail.com">
              krokhmalniy.code@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
