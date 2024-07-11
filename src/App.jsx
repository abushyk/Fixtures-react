import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TeamList from "./components/TeamList";
import ResultTable from "./components/ResultTable";
import MatchesTable from "./components/MatchesTable";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";


export default function App() {

    

    const [fixturesData, setFixturesData] = useState([]);
    const [resultData, setResultData] = useState([]);
    const [teamList, setTeamList] = useState([]);
    const [teamNames, setTeamNames] = useState([]);

    const [sortedBy, setSorderBy] = useState("pts");
    const [sortDirDesc, setSortDirDesc] = useState(true);

    const [selectedMatches, setselectedMatches] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    
    useEffect(() => {
        const { teams, fixtures } = JSON.parse(
            '{"teams":[{"id":1,"name":"Manchester United"},{"id":2,"name":"AFC Bournemouth"},{"id":3,"name":"Arsenal"},{"id":4,"name":"Aston Villa"},{"id":5,"name":"Brentford"},{"id":6,"name":"Brighton & Hov"},{"id":7,"name":"Chelsea"},{"id":8,"name":"Crystal Palace"},{"id":9,"name":"Everton"},{"id":10,"name":"Fulham"},{"id":11,"name":"Ipswich Town"},{"id":12,"name":"Leicester City"},{"id":13,"name":"Liverpool"},{"id":14,"name":"Manchester City"},{"id":15,"name":"Newcastle United"},{"id":16,"name":"Nottingham Forest"},{"id":17,"name":"Southampton"},{"id":18,"name":"Tottenham Hotspur"},{"id":19,"name":"West Ham United"},{"id":20,"name":"Wolverhampton"}],"fixtures":[[1,1,20,1,1],[1,2,19,2,1],[1,3,18,0,1],[1,4,17,1,0],[1,5,16,1,1],[1,6,15,1,0],[1,7,14,1,1],[1,8,13,2,2],[1,9,12,0,0],[1,10,11,2,0],[2,1,19,0,0],[2,20,18,1,0],[2,2,17,2,2],[2,3,16,1,0],[2,4,15,0,2],[2,5,14,0,1],[2,6,13,0,2],[2,7,12,1,2],[2,8,11,0,1],[2,9,10,0,0],[3,1,18,1,0],[3,19,17,0,1],[3,20,16,2,1],[3,2,15,2,2],[3,3,14,2,2],[3,4,13,2,1],[3,5,12,0,2],[3,6,11,1,2],[3,7,10,2,2],[3,8,9,1,1],[4,1,17,2,0],[4,18,16,0,1],[4,19,15,1,1],[4,20,14,2,0],[4,2,13,0,1],[4,3,12,1,0],[4,4,11,0,1],[4,5,10,0,1],[4,6,9,0,1],[4,7,8,0,2],[5,1,16,0,2],[5,17,15,2,1],[5,18,14,1,2],[5,19,13,0,2],[5,20,12,0,0],[5,2,11,2,0],[5,3,10,0,2],[5,4,9,1,2],[5,5,8,1,1],[5,6,7,2,1],[6,1,15,0,0],[6,16,14,1,1],[6,17,13,2,1],[6,18,12,2,0],[6,19,11,1,2],[6,20,10,2,2],[6,2,9,0,2],[6,3,8,0,2],[6,4,7,2,1],[6,5,6,1,0],[7,1,14,0,0],[7,15,13,1,1],[7,16,12,0,2],[7,17,11,1,2],[7,18,10,0,1],[7,19,9,0,2],[7,20,8,1,2],[7,2,7,1,1],[7,3,6,0,0],[7,4,5,1,1],[8,1,13,0,1],[8,14,12,2,0],[8,15,11,0,1],[8,16,10,2,0],[8,17,9,0,0],[8,18,8,0,2],[8,19,7,1,1],[8,20,6,2,1],[8,2,5,2,1],[8,3,4,0,0],[9,1,12,0,2],[9,13,11,2,0],[9,14,10,0,0],[9,15,9,0,0],[9,16,8,1,1],[9,17,7,1,1],[9,18,6,0,2],[9,19,5,0,2],[9,20,4,0,2],[9,2,3,1,2],[10,1,11,1,0],[10,12,10,0,1],[10,13,9,1,1],[10,14,8,2,0],[10,15,7,2,2],[10,16,6,1,1],[10,17,5,1,2],[10,18,4,2,2],[10,19,3,2,1],[10,20,2,0,2],[11,1,10,1,1],[11,11,9,1,0],[11,12,8,0,2],[11,13,7,1,1],[11,14,6,0,2],[11,15,5,2,0],[11,16,4,1,0],[11,17,3,1,2],[11,18,2,1,1],[11,19,20,1,2],[12,1,9,0,2],[12,10,8,1,2],[12,11,7,2,2],[12,12,6,0,2],[12,13,5,1,1],[12,14,4,1,1],[12,15,3,1,2],[12,16,2,1,0],[12,17,20,0,2],[12,18,19,2,2],[13,1,8,2,2],[13,9,7,1,1],[13,10,6,0,2],[13,11,5,0,2],[13,12,4,0,1],[13,13,3,2,1],[13,14,2,1,0],[13,15,20,2,0],[13,16,19,1,1],[13,17,18,1,1],[14,1,7,1,1],[14,8,6,2,0],[14,9,5,2,1],[14,10,4,1,1],[14,11,3,2,2],[14,12,2,1,0],[14,13,20,2,2],[14,14,19,0,1],[14,15,18,1,1],[14,16,17,0,0],[15,1,6,1,1],[15,7,5,2,2],[15,8,4,1,2],[15,9,3,1,2],[15,10,2,2,0],[15,11,20,0,0],[15,12,19,0,1],[15,13,18,1,1],[15,14,17,0,0],[15,15,16,2,0],[16,1,5,2,2],[16,6,4,1,2],[16,7,3,2,2],[16,8,2,0,1],[16,9,20,1,1],[16,10,19,1,1],[16,11,18,1,2],[16,12,17,1,2],[16,13,16,1,1],[16,14,15,1,0],[17,1,4,0,1],[17,5,3,2,0],[17,6,2,2,2],[17,7,20,1,2],[17,8,19,0,0],[17,9,18,0,0],[17,10,17,2,1],[17,11,16,0,1],[17,12,15,1,2],[17,13,14,2,1],[18,1,3,2,2],[18,4,2,2,2],[18,5,20,1,1],[18,6,19,1,2],[18,7,18,2,1],[18,8,17,2,1],[18,9,16,2,0],[18,10,15,0,0],[18,11,14,2,1],[18,12,13,2,2],[19,1,2,0,1],[19,3,20,1,1],[19,4,19,2,1],[19,5,18,1,1],[19,6,17,1,1],[19,7,16,0,1],[19,8,15,1,2],[19,9,14,2,2],[19,10,13,1,0],[19,11,12,0,0],[20,20,1,0,0],[20,19,2,2,1],[20,18,3,0,2],[20,17,4,1,1],[20,16,5,1,0],[20,15,6,2,2],[20,14,7,2,2],[20,13,8,0,2],[20,12,9,0,2],[20,11,10,1,0],[21,19,1,1,1],[21,18,20,0,2],[21,17,2,0,1],[21,16,3,1,1],[21,15,4,0,2],[21,14,5,0,1],[21,13,6,1,1],[21,12,7,0,2],[21,11,8,1,0],[21,10,9,2,0],[22,18,1,0,2],[22,17,19,1,0],[22,16,20,2,1],[22,15,2,1,1],[22,14,3,1,0],[22,13,4,0,2],[22,12,5,1,1],[22,11,6,2,1],[22,10,7,1,0],[22,9,8,2,0],[23,17,1,1,0],[23,16,18,0,1],[23,15,19,0,2],[23,14,20,1,0],[23,13,2,2,1],[23,12,3,0,1],[23,11,4,2,1],[23,10,5,1,0],[23,9,6,2,1],[23,8,7,1,0],[24,16,1,2,0],[24,15,17,1,0],[24,14,18,1,0],[24,13,19,0,0],[24,12,20,0,2],[24,11,2,2,2],[24,10,3,2,0],[24,9,4,2,2],[24,8,5,1,0],[24,7,6,1,1],[25,15,1,1,1],[25,14,16,2,1],[25,13,17,0,1],[25,12,18,1,0],[25,11,19,2,0],[25,10,20,0,0],[25,9,2,2,1],[25,8,3,2,2],[25,7,4,1,1],[25,6,5,2,1],[26,14,1,0,0],[26,13,15,2,1],[26,12,16,0,1],[26,11,17,1,0],[26,10,18,0,0],[26,9,19,0,1],[26,8,20,1,2],[26,7,2,1,0],[26,6,3,0,1],[26,5,4,1,0],[27,13,1,1,2],[27,12,14,2,2],[27,11,15,1,2],[27,10,16,0,2],[27,9,17,2,1],[27,8,18,2,1],[27,7,19,0,1],[27,6,20,2,2],[27,5,2,2,1],[27,4,3,2,2],[28,12,1,1,1],[28,11,13,2,2],[28,10,14,2,2],[28,9,15,2,0],[28,8,16,0,1],[28,7,17,1,2],[28,6,18,2,2],[28,5,19,2,0],[28,4,20,1,2],[28,3,2,1,1],[29,11,1,1,1],[29,10,12,1,1],[29,9,13,2,1],[29,8,14,1,0],[29,7,15,0,2],[29,6,16,2,2],[29,5,17,2,0],[29,4,18,2,0],[29,3,19,0,1],[29,2,20,1,2],[30,10,1,1,0],[30,9,11,0,2],[30,8,12,2,2],[30,7,13,0,1],[30,6,14,1,0],[30,5,15,1,0],[30,4,16,0,2],[30,3,17,0,0],[30,2,18,0,0],[30,20,19,0,1],[31,9,1,0,0],[31,8,10,0,1],[31,7,11,0,2],[31,6,12,2,0],[31,5,13,2,2],[31,4,14,0,0],[31,3,15,1,2],[31,2,16,2,1],[31,20,17,2,2],[31,19,18,0,1],[32,8,1,2,0],[32,7,9,1,0],[32,6,10,1,2],[32,5,11,2,1],[32,4,12,0,2],[32,3,13,1,2],[32,2,14,1,0],[32,20,15,2,2],[32,19,16,0,2],[32,18,17,1,2],[33,7,1,2,1],[33,6,8,2,2],[33,5,9,0,2],[33,4,10,2,2],[33,3,11,2,0],[33,2,12,0,2],[33,20,13,2,2],[33,19,14,0,2],[33,18,15,2,2],[33,17,16,1,1],[34,6,1,0,1],[34,5,7,0,1],[34,4,8,1,2],[34,3,9,2,0],[34,2,10,1,1],[34,20,11,2,2],[34,19,12,2,1],[34,18,13,2,0],[34,17,14,2,1],[34,16,15,0,0],[35,5,1,2,0],[35,4,6,1,2],[35,3,7,0,2],[35,2,8,2,2],[35,20,9,2,1],[35,19,10,0,1],[35,18,11,2,1],[35,17,12,1,0],[35,16,13,0,2],[35,15,14,2,1],[36,4,1,2,0],[36,3,5,2,0],[36,2,6,2,1],[36,20,7,2,0],[36,19,8,1,2],[36,18,9,1,0],[36,17,10,0,2],[36,16,11,2,2],[36,15,12,1,2],[36,14,13,1,2],[37,3,1,0,2],[37,2,4,0,0],[37,20,5,2,0],[37,19,6,0,2],[37,18,7,2,2],[37,17,8,0,0],[37,16,9,2,1],[37,15,10,0,0],[37,14,11,0,1],[37,13,12,1,0],[38,2,1,1,2],[38,20,3,1,2],[38,19,4,1,1],[38,18,5,1,0],[38,17,6,2,1],[38,16,7,1,0],[38,15,8,2,2],[38,14,9,2,2],[38,13,10,2,2],[38,12,11,1,1]]}'
        );

        setTeamList(teams);
        setFixturesData(fixtures);

        let teamNames = [];
        for (let team of teams) {
            teamNames[team.id] = team.name;
        }
        setTeamNames(teamNames);

        setResultData(creatFixtureTable(fixtures, teamNames));
        console.log('INIT');
    }, []);

    console.log('Render App');
    

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

        let sortableItems = [...resultData];

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
        setResultData(sortableItems);
    };

    const showMatches = (teamID, matchType) => {

        let matches = fixturesData.filter((fixture) => {
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
            }
            return res;
        });

        setselectedMatches(matches);
        setShowModal(true);
    };

    const creatFixtureTable = (fixtures, teamNames) => {
        let result = [];
        for (let fixture of fixtures) {
            let t1id = fixture[1];
            let t2id = fixture[2];
            let round = fixture[0];
            let t1score = fixture[3];
            let t2score = fixture[4];
            if (!result[t1id]) {
                result[t1id] = createRObject(t1id, teamNames[t1id]);
            }
            if (!result[t2id]) {
                result[t2id] = createRObject(t2id, teamNames[t2id]);
            }
    
            result[t1id].games += 1;
            result[t2id].games += 1;
    
            result[t1id].gf += t1score;
            result[t2id].gf += t2score;
    
            result[t1id].ga += t2score;
            result[t2id].ga += t1score;
    
            if (t1score === t2score) {
                result[t1id].draws += 1;
                result[t2id].draws += 1;
    
                result[t1id].pts += 1;
                result[t2id].pts += 1;
            } else if (t1score > t2score) {
                result[t1id].wins += 1;
                result[t2id].loses += 1;
    
                result[t1id].pts += 3;
            } else {
                result[t1id].loses += 1;
                result[t2id].wins += 1;
    
                result[t2id].pts += 3;
            }
    
            result[t1id].gdiff += t1score - t2score;
            result[t2id].gdiff += t2score - t1score;
        }
    
        result = result.filter(function (el) {
            return el != null;
        });
    
        let fixtures_sort = [...fixtures];
    
        fixtures_sort = fixtures_sort.sort((a, b) => {
            if (a[0] < b[0]) {
                return 1;
            } else if (a[0] > b[0]) {
                return -1;
            } else {
                return 0;
            }
        });

        console.log(fixtures_sort);
    
        result.map((item) => {
            let id = item.id;
            item.last = [];

            for (let fixture_sort of fixtures_sort) {
                if((fixture_sort[1] === id || fixture_sort[2] === id) && item.last.length < 5){
                    item.last.push(formatMatch(fixture_sort, id, teamNames));
                }
            }
        });
    
        console.log(result);
    
        result.sort((a, b) => {
            if (a.pts < b.pts) {
                return 1;
            } else if (a.pts > b.pts) {
                return -1;
            } else {
                return 0;
            }
        });
        let pos = 1;
        result.map((item) => {
            item.position = pos;
            pos += 1;
        });
    
        return result;
    }

    const formatMatch = (fixture_sort, id, teamNames) => {
        let matchresult = 'd';
        if(fixture_sort[1] === id && fixture_sort[3] > fixture_sort[4]){
            matchresult = 'w';
        }else if(fixture_sort[1] === id && fixture_sort[3] < fixture_sort[4]){
            matchresult = 'l';
        }else if(fixture_sort[2] === id && fixture_sort[3] > fixture_sort[4]){
            matchresult = 'l';
        }else if(fixture_sort[2] === id && fixture_sort[3] < fixture_sort[4]){
            matchresult = 'w';
        }

        let str = teamNames[fixture_sort[1]] + ' - ' + teamNames[fixture_sort[2]] + ' ' + fixture_sort[3] + ' ' + fixture_sort[4];

        return [matchresult, str];
    }
    
    const createRObject = (id, name) => {
        return {
            id: id,
            position: 0,
            name: name,
            games: 0,
            wins: 0,
            draws: 0,
            loses: 0,
            gf: 0,
            ga: 0,
            gdiff: 0,
            pts: 0,
        };
    }

    return (
        <>
            <Container>
                <h1>Fixtures</h1>
                <Row>
                    <Col md={4}>
                        <TeamList items={teamList} />
                    </Col>
                    <Col md={8}>
                        <ResultTable
                            fixturesData={resultData}
                            sortFixtures={sortFixtures}
                            showMatches={showMatches}
                        />
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MatchesTable
                        selectedMatches={selectedMatches}
                        teamNames={teamNames}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}