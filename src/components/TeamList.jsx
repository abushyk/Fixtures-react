export default function TeamList({ items }) {
    console.log('Render TeamList');
    return (
        <>
            <div className="card">
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name} {item.id}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}