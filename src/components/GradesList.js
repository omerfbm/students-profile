const GradesList = ({ grades }) => (
    <div>
        <p>Grades</p>
            {
                grades.map((grade, i) => (
                    <li key={i}>
                        <div>
                            <p>{`Test ${i+1}:`}</p>
                            <p>{`${grade}%`}</p>
                        </div>

                    </li>
                ))
            }
    </div>
)

export default GradesList
