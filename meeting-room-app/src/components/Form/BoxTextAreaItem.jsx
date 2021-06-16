
const BoxTextAreaItem = ({ item, icon, id, placeholder }) => {
    return (
        <div className={ 'container-' + item }>
            <span className="icon"><i className={ 'fa fa-' + icon }></i></span>
            <textarea
                id={ id }
                cols="30"
                rows="5"
                placeholder={ placeholder }
            >
            </textarea>
        </div>
    )
}

export default BoxTextAreaItem;
