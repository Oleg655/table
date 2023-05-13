import './modal.css';

type ModalT = {
    backgroundOnClick: () => void;
    show: boolean;
    children: React.ReactNode;
};
const Modal = ({ children, show, backgroundOnClick }: ModalT) => {
    if (!show) return null;
    return (
        <>
            <div
                className="backdrop"
                tabIndex={0}
                role="button"
                onClick={backgroundOnClick}
                onKeyPress={() => {}}
            >
                <div />
            </div>
            <div className="modal">{children}</div>
        </>
    );
};

export default Modal;
