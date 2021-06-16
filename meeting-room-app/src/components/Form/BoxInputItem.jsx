
const BoxInputItem = ({ item, icon, id, type, placeholder }) => {
    return (
        <div className={ 'container-' + item }>
            <span className="icon"><i className={ 'fa fa-' + icon }></i></span>
            <input
                type={ type ? type : 'text' }
                id={ id }
                className="montse"
                placeholder={ placeholder }
            >
            </input>
        </div>
    );
}

export default BoxInputItem;
