import ConnectModal from './ConnectModal';
import { useState } from 'react';

export default function ConnectButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button onClick={() => toggleModal()}>Connect Wallet</button>
      {modalOpen && <ConnectModal toggleModal={toggleModal} />}
    </>
  );
}
