import { useState } from "react";

export default function TourSelector({currentTour, tourChanged, tours}){

    // Текущий тур
    const [showedTour, setShowedTour] = useState(currentTour);

    const changeTourSelect = (event) => {
        let tour = event.target.value;
        setShowedTour(tour);
        tourChanged(tour);
    }
    
    console.log('Render TourSelector');
    return (
        <div>
            <select className={'form-control'} value={showedTour} onChange={changeTourSelect}>
            {
                tours.map((item, i) => <option key={i} value={item} onSelect={() => changeTour(item)}>{item}</option>)
            }
            </select>                            
        </div>
    )
}