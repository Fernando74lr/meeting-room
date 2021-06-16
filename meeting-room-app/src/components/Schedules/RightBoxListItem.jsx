
const RightBoxListItem = ({ date, month, year, hour, minutes, am_pm, title }) => {
    return (
        <>
            <li className="rb-item" ng-repeat="itembx">
                <div className="timestamp">
                    { date } { month } { year }{"\n"} { hour }:{ minutes } { am_pm }
                </div>
                <div className="item-title">{ title }</div>
            </li>
        </>
    );
}

export default RightBoxListItem;
