import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import Image from "next/image";
import { ComponentPropsWithoutRef, ReactNode, useId } from "react";
import { useDialog } from "./hooks";
import styles from "./styles.module.css";

export type DialogProps = {
  title: string;
  children: ReactNode;
  formProps?: ComponentPropsWithoutRef<"form">;
  cancelButtonProps?: ComponentPropsWithoutRef<typeof Button>;
  positiveButtonProps?: ComponentPropsWithoutRef<typeof Button>;
  negativeButtonProps?: ComponentPropsWithoutRef<typeof Button>;
  className?: string;
};

export const Dialog = ({
  title,
  children,
  formProps,
  cancelButtonProps,
  positiveButtonProps,
  negativeButtonProps,
  className,
}: DialogProps) => {
  const headingId = useId();
  const { hideDialog } = useDialog();
  return (
    <div
      role="dialog"
      aria-labelledby={headingId}
      className={styles.dialog}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <form {...formProps} className={styles.form}>
        {title && (
          <header className={styles.header}>
            <button className={styles.closeBtn} onClick={hideDialog}>
              <Image
                src={require("./assets/close.svg")}
                alt="閉じる"
                width={20}
                height={20}
              />
            </button>
            <Heading tag="h3" size={22} id={headingId} className={styles.titleContent}>
              {title}
            </Heading>
          </header>
        )}
        <div className={className}>{children}</div>
        <footer className={styles.footer}>
          {cancelButtonProps && (
            <span className={styles.footerLeft}>
              <Button {...cancelButtonProps} theme="text" />
            </span>
          )}
          {negativeButtonProps && (
            <Button {...negativeButtonProps} theme="normal" />
          )}
          {positiveButtonProps && <Button {...positiveButtonProps} />}
        </footer>
      </form>
    </div>
  );
};

export const DialogContainer = ({
  node,
  onClickClose,
}: {
  node: JSX.Element;
  onClickClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}) => {
  return (
    <div className={styles.container} onClick={onClickClose}>
      {node}
    </div>
  );
};
