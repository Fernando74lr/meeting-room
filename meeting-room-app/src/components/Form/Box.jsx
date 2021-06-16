import BoxInputItem from "./BoxInputItem.jsx";
import BoxTextAreaItem from "./BoxTextAreaItem";

const Box = () => {
    return (
        <div className="box">
            <div className="container-2">
                <h1 className="title montse">Sala de juntas</h1>
            </div>
            
            <BoxInputItem
                item={3}
                icon="user"
                id="name"
                placeholder="Nombre"
            />

            <BoxInputItem
                item={4}
                icon="hourglass-start"
                id="initial-time"
                placeholder="Desde"
            />

            <BoxInputItem
                item={5}
                icon="hourglass-end"
                id="final-time"
                placeholder="Hasta"
            />

            <BoxTextAreaItem
                item={6}
                icon="align-left"
                id="description2"
                placeholder="Descripción"
            />

            <button id="btnReservar" className="montse">Reservar</button>
        </div>
    );
}

export default Box;