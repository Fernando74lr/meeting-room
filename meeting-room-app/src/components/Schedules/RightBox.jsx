import RightBoxList from "./RightBoxList.jsx";

const RightBox = ({ schedules }) => {
    return (
        <div className="rightbox">
            <div className="rb-container montse">
                <RightBoxList schedules={ schedules } />
            </div>
        </div>
    );
}

export default RightBox;
