"use client"

import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { UserButton } from '@clerk/nextjs';
import { useEffect } from 'react';
//we r missing onClose property for modal;
const Setup = () => {
  const onOpen = useStoreModal((state)=> state.onOpen);
  const isOpen = useStoreModal((state)=> state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen, onOpen]);

  return (
    <div className="p-4">
    <p>This is the ROOT Page</p>
    {/* <UserButton afterSignOutUrl='/'/> */}
    </div>
  )
}

export default Setup;
