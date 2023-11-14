import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { UserButton } from '@clerk/nextjs';
//we r missing onClose property for modal;
const Setup = () => {
  return (
    <div className="p-4">
    <p>This is a protected page</p>
    <Modal isOpen title='test' description='test'>
        Children
    </Modal>
    {/* <UserButton afterSignOutUrl='/'/> */}
    </div>
  )
}

export default Setup;
