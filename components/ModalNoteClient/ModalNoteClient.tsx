// components/ModalNoteClient/ModalNoteClient.tsx

"use client";

import { useRouter } from 'next/navigation'
import Modal from '@/components/Modal/Modal'

function ModalNoteClient({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleClose = () => router.back();
  return <Modal onClose={handleClose}>{children}</Modal>;
}

export default ModalNoteClient;