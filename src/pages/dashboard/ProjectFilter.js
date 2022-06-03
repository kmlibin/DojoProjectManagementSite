
const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

export default function ProjectFilter({ filter, changeFilter }) {


    const handleClick = (newFilter) => {
        changeFilter(newFilter)

    }

    return (
        <div className="project-filter">
            <nav>
                <p>Filter By:</p>
                {filterList.map((f) => (
                    <button
                        className={filter === f ? 'active' : ''}
                        key={f}
                        onClick={() => handleClick(f)}>{f}</button>
                ))}
            </nav>
        </div>
    )
}
