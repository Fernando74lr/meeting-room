
const LeftBoxItem = ({ id, icon, show }) => {
    return (
        <a id={ id } href="/">
            <i className={ 'fa fa-' + icon }></i>
        </a>
    );
}

export default LeftBoxItem;
