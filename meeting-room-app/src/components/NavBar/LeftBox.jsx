import LeftBoxItem from './LeftBoxItem.jsx'

const LeftBox = () => {
    return (
        <div className="leftbox">
            <nav>
                <LeftBoxItem
                    id="dashboard"
                    icon="history"
                />

                <LeftBoxItem
                    id="profile"
                    icon="user"
                />

                <LeftBoxItem
                    id="settings"
                    icon="align-justify"
                    show={ true }
                />

                <LeftBoxItem
                    id="messages"
                    icon="comments"
                    show={ true }
                />

                <LeftBoxItem
                    id="notification"
                    icon="bell"
                    show={ true }
                />
            </nav>
        </div>
    );
}

export default LeftBox;