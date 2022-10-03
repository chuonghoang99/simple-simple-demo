import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./styles.module.css";

type Theme = "primary" | "secondary" | "normal" | "delete" | "text";

export const Button = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button"> & { theme?: Theme }
>(function ButtonBase({ className, theme = "primary", ...props }, ref) {
  return (
    <button
      {...props}
      ref={ref}
      className={clsx(className, styles.module)}
      data-theme={theme}
    />
  );
});