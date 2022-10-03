import clsx from "clsx";
import { createElement, forwardRef } from "react";
import styles from "./styles.module.css";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Size = 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
type Props<T extends Tag> = Omit<
  React.ComponentPropsWithRef<T>,
  "size" | "align"
> & {
  tag: Tag;
  size?: Size;
  align?: "center";
};

export const Heading: <T extends Tag>(props: Props<T>) => JSX.Element | null =
  forwardRef<HTMLHeadingElement, Props<Tag>>(function HeadingElement(
    { tag, className, size, ...props },
    ref
  ) {
    return createElement(tag, {
      ref,
      className: clsx(className, styles.module),
      "data-size": size,
      ...props,
    });
  });
