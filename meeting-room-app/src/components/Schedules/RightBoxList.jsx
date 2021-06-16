import RightBoxListItem from './RightBoxListItem';

const RightBoxList = () => {
    return (
        <ul className="rb">
            <RightBoxListItem
                date="3"
                month="Mayo"
                year="2020"
                initial_time="7:00"
                final_time="15:15"
                title="Chris Serrano posted a photo on your wall."
            />

            <RightBoxListItem
                date="13"
                month="Mayo"
                year="2020"
                initial_time="7:00"
                final_time="15:15"
                title="Mia Redwood commented on your last post."
            />

            <RightBoxListItem
                date="17"
                month="Junio"
                year="2020"
                initial_time="7:00"
                final_time="15:15"
                title="Lucas McAlister just send you a message."
            />
        </ul>
    );
}

export default RightBoxList;
