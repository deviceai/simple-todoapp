import React from 'react'

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;

}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
  <div className="modal-box">
  {children}
    <div className="modal-action">
      <label onClick={() => setModalOpen(false)} htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
  )
}

export default Modal