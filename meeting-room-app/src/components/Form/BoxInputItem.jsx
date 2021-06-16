
const BoxInputItem = ({ item, icon, id, placeholder }) => {
    return (
        <div className={ 'container-' + item }>
            <span className="icon"><i className={ 'fa fa-' + icon }></i></span>
            <input
                type="text"
                id={ id }
                className="montse"
                placeholder={ placeholder }
            >
            </input>
        </div>
    )
}

export default BoxInputItem;
