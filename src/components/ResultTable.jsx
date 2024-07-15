import { useState, useCallback } from "react";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import MatchIcon from "./MatchIcon";
import TourSelector from "./TourSelector";
import ModalWindow from "./ModalWindow";

export default function ResultTable({
    globalData,
    helper
}) {
    console.log('Render ResultTable');
    
    let currentTourNr = globalData.tours[globalData.tours.length - 1];

    let fixts = helper.getFixturesByTour(currentTourNr)

    const [currentTour, setCurrentTour] = useState(currentTourNr);
    const [resultTable, setResultTable] = useState(helper.createFixtureTable(fixts));

    // Модальное окно выбранных матчей
    const [modalInfo, setModalInfo] = useState({
        show: false,
        title: '',
        matches: [],
        showingTeam: 0
    })

    

    // Текущая сортировка
    const [sortedBy, setSorderBy] = useState("pts");

    // Текущее направление сортировки
    const [sortDirDesc, setSortDirDesc] = useState(true);

    // Управление модалкой информации
    const handleClose = useCallback(() => setModalInfo({...modalInfo, show: false, matches: []}), []);
    const handleShow = () => setModalInfo({...modalInfo, show: true});

    const tourChanged = useCallback((tour) => {
        setResultTable(helper.createFixtureTable(helper.getFixturesByTour(tour)));
        setCurrentTour(tour)
    }, [])

    

    

    const sortFixtures = (bywhat) => {
        let currentSortDirDesc = sortDirDesc;
        if (sortedBy === bywhat) {
            setSortDirDesc((prev) => !prev);
            currentSortDirDesc = !currentSortDirDesc;
        } else {
            setSorderBy(bywhat);
            setSortDirDesc(true);
            currentSortDirDesc = true;
        }

        let sortableItems = [...resultTable];

        sortableItems = sortableItems.sort((a, b) => {
            if(currentSortDirDesc){
                if (a[bywhat] < b[bywhat]) {
                    return 1;
                } else if (a[bywhat] > b[bywhat]) {
                    return -1;
                } else {
                    return 0;
                }
            }else{
                if (a[bywhat] > b[bywhat]) {
                    return 1;
                } else if (a[bywhat] < b[bywhat]) {
                    return -1;
                } else {
                    return 0;
                }
            }            
        });
        setResultTable(sortableItems);
    };

    const showMatches = (teamID, matchType) => {
        let title = '';
        switch (matchType) {
            case "wins": {
                title = title + 'Winning matches' + ' ';
                break;
            }
            case "loses": {
                title = title + 'Losed matches' + ' ';
                break;
            }
            case "draws": {
                title = title + 'Draw matches' + ' ';
                break;
            }
            case "gf": {
                title = title + 'Matches with goals forwarded' + ' ';
                break;
            }
            
            case "ga": {
                title = title + 'Matches with goals ahead' + ' ';
                break;
            }
            
            case "pts": {
                title = title + 'Pointed matches' + ' ';
                break;
            }
            
            
            case "m": {
                title = title + 'All matches' + ' ';
                break;
            }
        }

        title = title + 'of ' + globalData.teamIndex[teamID];

        //console.log(currentTour)


        let matches = helper.getFixturesByTour(currentTour).filter((fixture) => {
            let res = false;
            switch (matchType) {
                case "wins": {
                    if (fixture[1] == teamID && fixture[3] > fixture[4]) {
                        res = true;
                    } else if (
                        fixture[2] == teamID &&
                        fixture[3] < fixture[4]
                    ) {
                        res = true;
                    }
                    break;
                }
                case "loses": {
                    if (fixture[1] == teamID && fixture[3] < fixture[4]) {
                        res = true;
                    } else if (
                        fixture[2] == teamID &&
                        fixture[3] > fixture[4]
                    ) {
                        res = true;
                    }
                    break;
                }
                case "draws": {
                    if (
                        (fixture[1] == teamID || fixture[2] == teamID) &&
                        fixture[3] === fixture[4]
                    ) {
                        res = true;
                    }
                    break;
                }
                case "gf": {
                    if ((fixture[1] == teamID && fixture[3] !== 0) || (fixture[2] == teamID && fixture[4] !== 0)) {
                        res = true;
                    }
                    break;
                }
                
                case "ga": {
                    if ((fixture[1] == teamID && fixture[4] !== 0) || (fixture[2] == teamID && fixture[3] !== 0)) {
                        res = true;
                    }
                    break;
                }
                
                case "pts": {
                    if ((fixture[1] == teamID && fixture[3] >= fixture[4]) || (fixture[2] == teamID && fixture[3] <= fixture[4])) {
                        res = true;
                    }
                    break;
                }
                
                
                case "m": {
                    if ((fixture[1] == teamID) || (fixture[2] == teamID)) {
                        res = true;
                    }
                    break;
                }
                default: {
                    res = false;
                }
            }
            return res;
        });

        setModalInfo({...modalInfo, show: true, matches: matches, title: title});
    };
    
    return (
        <>
            <TourSelector currentTour={currentTour} tourChanged={tourChanged} tours={globalData.tours} />
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
                    {resultTable.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.position}</td>
                                <td>
                                    {item.name}
                                </td>
                                <td onClick={() =>
                                        showMatches(item.id, "m")
                                    }>{item.games}</td>
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
                                <td onClick={() =>
                                        showMatches(item.id, "gf")
                                    }
                                    className="num">{item.gf}</td>
                                <td onClick={() =>
                                        showMatches(item.id, "ga")
                                    }
                                    className="num">{item.ga}</td>
                                <td>{item.gdiff}</td>
                                <td onClick={() =>
                                        showMatches(item.id, "pts")
                                    }>{item.pts}</td>
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

            <ModalWindow modalInfo={modalInfo} handleClose={handleClose} teamNames={globalData.teamIndex} />
        </>
    );
}
