const GradesList = ({ grades }) => (
    <div>
        <p>Grades</p>
            {
                grades.map((grade, i) => (
                    <li key={i}>
                        <row>
                            <text>{`Test ${i+1}:`}</text>
                            <text>{`${grade}%`}</text>
                        </row>

                    </li>
                ))
            }
    </div>
)

export default GradesList
