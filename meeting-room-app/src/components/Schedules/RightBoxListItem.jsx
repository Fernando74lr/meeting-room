
const RightBoxListItem = ({ date, month, year, initial_time, final_time, title }) => {
    return (
        <>
            <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                    { date } de { month } { year } {"\n"}
                    { initial_time } {" - "} { final_time }
                </div>
                <div className="item-title">{ title }</div>
            </li>
        </>
    );
}

export default RightBoxListItem;
