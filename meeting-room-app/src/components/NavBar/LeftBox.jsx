import LeftBoxItem from './LeftBoxItem.jsx'

const LeftBox = () => {
    return (
        <div className="leftbox">
            <nav>
                {/* history */}
                <LeftBoxItem
                    id="dashboard"
                    icon="circle"
                />

                {/* user */}
                <LeftBoxItem
                    id="profile"
                    icon="circle"
                />

                {/* align-justify */}
                <LeftBoxItem
                    id="settings"
                    icon="circle"
                />

                {/* comments */}
                <LeftBoxItem
                    id="messages"
                    icon="circle"
                />

                {/* notification */}
                <LeftBoxItem
                    id="notification"
                    icon="circle"
                />
            </nav>
        </div>
    );
}

export default LeftBox;