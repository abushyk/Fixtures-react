import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function MatchIcon({ item }) {
    let classname = "match-icon match-icon-" + item[0];
    return (
        <>
            <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id={`tooltip-top`}>{item[1]}</Tooltip>}
            >
                <span className={classname}>{item[0]}</span>
            </OverlayTrigger>
        </>
    );
}
