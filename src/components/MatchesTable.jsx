import Table from "react-bootstrap/Table";
function MatchesTable({ selectedMatches, teamNames }) {
    return (
        <>
            <Table responsive striped bordered hover className="matches-table">
                <tbody>
                    {selectedMatches.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item[0]}</td>
                                <td>{teamNames[item[1]]}</td>
                                <td>
                                    {item[3]} - {item[4]}
                                </td>
                                <td>{teamNames[item[2]]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default MatchesTable;