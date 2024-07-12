import Modal from "react-bootstrap/Modal";
import MatchesTable from "./MatchesTable";

export default function ModalWindow({modalInfo, handleClose, teamNames}){
    console.log('Render ModalWindow');
    return (
        <Modal show={modalInfo.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalInfo.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MatchesTable
                    selectedMatches={modalInfo.matches}
                    teamNames={teamNames}
                />
            </Modal.Body>
        </Modal>
    )
}