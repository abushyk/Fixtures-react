import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import MatchIcon from "./MatchIcon";

export default function ResultTable({
    fixturesData,
    sortFixtures,
    showMatches,
}) {
    return (
        <>
            <Table responsive striped bordered hover className="result-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>MP</th>
                        <th onClick={() => sortFixtures("wins")}>
                            <span>W</span>
                        </th>
                        <th onClick={() => sortFixtures("draws")}>
                            <span>D</span>
                        </th>
                        <th onClick={() => sortFixtures("loses")}>
                            <span>L</span>
                        </th>
                        <th onClick={() => sortFixtures("gf")}>
                            <span>F</span>
                        </th>
                        <th onClick={() => sortFixtures("ga")}>
                            <span>A</span>
                        </th>
                        <th onClick={() => sortFixtures("gdiff")}>
                            <span>D</span>
                        </th>
                        <th onClick={() => sortFixtures("pts")}>
                            
                            <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        Tooltip on <strong>top</strong>.
                                    </Tooltip>
                                }
                            >
                                <span>P</span>
                            </OverlayTrigger>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {fixturesData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.position}</td>
                                <td>
                                    {item.name} [{item.id}]
                                </td>
                                <td>{item.games}</td>
                                <td
                                    onClick={() => showMatches(item.id, "wins")}
                                    className="num"
                                >
                                    {item.wins}
                                </td>
                                <td
                                    onClick={() =>
                                        showMatches(item.id, "draws")
                                    }
                                    className="num"
                                >
                                    {item.draws}
                                </td>
                                <td
                                    onClick={() =>
                                        showMatches(item.id, "loses")
                                    }
                                    className="num"
                                >
                                    {item.loses}
                                </td>
                                <td>{item.gf}</td>
                                <td>{item.ga}</td>
                                <td>{item.gdiff}</td>
                                <td>{item.pts}</td>
                                <td>
                                    {
                                        item.last.map((it, i) => <MatchIcon key={i} item={it} />)
                                    }
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
