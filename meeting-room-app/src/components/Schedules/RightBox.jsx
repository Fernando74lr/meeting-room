import RightBoxList from "./RightBoxList.jsx";

const RightBox = ({ schedules }) => {
    return (
        <div className="rightbox">
            <div className="rb-container montse">
                {
                    schedules.length > 0 ? <RightBoxList schedules={ schedules } /> : <h4 className="title-no-schedules">No hay juntas</h4>
                }
            </div>
        </div>
    );
}

export default RightBox;
