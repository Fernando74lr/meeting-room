
const LeftBoxItem = ({ id, icon, show }) => {
    return (
        <a id={ id } href="/" className={show && 'not'}>
            <i className={ 'fa fa-' + icon }></i>
        </a>
    );
}

export default LeftBoxItem;
