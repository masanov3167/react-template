import Result from "./Result";

const Trend =() =>{
    return (
        <section className="trend">
            <ol className="trend-list">
                <li className="trend-list-item">Today's trends</li>
                <li className="trend-list-item">
                    <div>
                        <time>as of 25 May 2019, 09:41 PM</time>
                        <p>Today <span>Yesterday</span></p>
                    </div>
                </li>
            </ol>
            <ol className="result-list">
                <Result text="Resolved" number="449" />
                <Result text="Received" number="426" />
                <Result text="Average first response time" number="33m" />
                <Result text="Average response time" number="3h 8m" />
                <Result text="Average response time" number="94%" />
            </ol>
        </section>
    )
}

export default Trend;