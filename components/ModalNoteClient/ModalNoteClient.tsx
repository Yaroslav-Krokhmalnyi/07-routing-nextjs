// components/ModalNoteClient/ModalNoteClient.tsx

"use client";

import Modal from '@/components/Modal/Modal'

function ModalNoteClient({ children }: { children: React.ReactNode }) {
  return <Modal>{children}</Modal>;
}

export default ModalNoteClient;