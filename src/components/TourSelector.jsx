export default function TourSelector({showedTour, changeTourSelect, tours}){
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