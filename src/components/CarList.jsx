import React from 'react';
import CarItem from "./CarItem";

const CarList = ({cars, title, remove, update, modal, setModal}) => {

    if(!cars.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Доступные для аренды машины не найдены!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {cars.map((car, index) =>
                <CarItem modal={modal} setModal={setModal} remove={remove} update={update} number={index + 1} car={car} carId={car.id} key={car.id}/>
            )}
        </div>
    );
};

export default CarList;