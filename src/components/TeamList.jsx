export default function TeamList({ items }) {
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