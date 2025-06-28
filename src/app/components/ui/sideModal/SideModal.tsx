import React, { ReactNode, useEffect, useRef } from "react";
import { Button } from "antd";
import { Xmark } from "iconoir-react";

interface sideformsectionProps {
  isOpen?: boolean;
  setIsOpen?: React.SetStateAction<React.Dispatch<boolean>> | any;
  name: string;
  children: ReactNode;
  tabIndex?: number;
  EditionalBtn?: any;
  isShoowMoreClass?: string;
  backButton?: any;
}

export const SideModal: React.FC<sideformsectionProps> = ({
  isOpen,
  setIsOpen,
  name,
  children,
  tabIndex,
  EditionalBtn,
  isShoowMoreClass,
  backButton,
}) => {

  const modalRef: any = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Focus the first element when the modal opens
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }

      const handleKeyDown = (e: any) => {
        if (e.key === "Tab") {
          const focusable = Array.from(
            modalRef.current.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
          );
          const first: any = focusable[0];
          const last: any = focusable[focusable.length - 1];

          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            // Tab
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, setIsOpen]);

  return (
    <div>
      <div
        tabIndex={-1}
        className={`transition-all ${isOpen ? "bg-[#0005] h-[100vh] fixed w-full top-0 left-0 z-30" : ""}`}
      ></div>

      <div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        className={`fixed right-2 top-[50%] translate-y-[-50%] h-[98vh] pb-4 bg-[--card] rounded-lg z-40 ${isOpen
          ? `${isShoowMoreClass} w-[500px] opacity-1  overflow-auto`
          : "w-0 opacity-0 overflow-hidden"
          } transition-all `}
      >
        <div className="flex items-center px-4 py-4 border-b-2 sticky top-0 bg-[--card] z-[999999]">
          <div className={`font-semibold text-lg text-[var(--dark)] ${backButton ? "flex items-center gap-2" : ""} `}>{backButton} {name}</div>
          <div className="ml-auto flex items-center gap-3">
            {EditionalBtn && <EditionalBtn />}
            <Button icon={<Xmark />} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
