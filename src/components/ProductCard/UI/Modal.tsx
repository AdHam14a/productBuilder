import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode, Fragment } from "react";

interface IProps {
  isOpen: boolean;
  closeModal(): void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ isOpen, closeModal, title, children }: IProps) {
  return (
    <Dialog open={isOpen} onClose={closeModal} as={Fragment}>
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/30">
        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
          {title && (
            <DialogTitle className="text-lg font-medium text-gray-800 mb-4">
              {title}
            </DialogTitle>
          )}
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
