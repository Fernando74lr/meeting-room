import RightBoxListItem from './RightBoxListItem';

const RightBoxList = () => {
    return (
        <ul className="rb">
            <RightBoxListItem
                date="3"
                month="Mayo"
                year="2020"
                hour="7"
                minutes="00"
                am_pm="PM"
                title="Chris Serrano posted a photo on your wall."
            />

            <RightBoxListItem
                date="19"
                month="Mayo"
                year="2020"
                hour="3"
                minutes="00"
                am_pm="PM"
                title="Mia Redwood commented on your last post."
            />

            <RightBoxListItem
                date="17"
                month="Junio"
                year="2020"
                hour="8"
                minutes="00"
                am_pm="AM"
                title="Lucas McAlister just send you a message."
            />
        </ul>
    );
}

export default RightBoxList;
