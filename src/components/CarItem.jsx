import React from 'react';
import AddButton from "./UI/button/AddButton";
import UpdateModal from "./Modal/UpdateModal";
import UpdateForm from "./UpdateForm";

const CarItem = (props) => {




    return (
        <div>
            <div>
                <div className="car_card">
                    <div className='car_card_content'>
                        <strong>{props.number}. {props.car.brand.label} {props.car.model}</strong>
                        <div>
                            Цвет:{props.car.color}
                            <br/>
                            КПП:{props.car.transmission}
                            <br/>
                            Кузов:{props.car.body_style}
                            <br/>
                            Год Выпуска:{props.car.year}
                            <br/>
                            Пробег:{props.car.mileage}
                            <br/>
                            Цена: {props.car.price}р.
                        </div>
                    </div>
                    <AddButton onClick={() => props.setModal(true)}>
                        Изменить
                    </AddButton>
                    <UpdateModal visible={props.modal} setVisible={props.setModal}>
                        <UpdateForm update={props.update} carId={props.carId}/>
                    </UpdateModal>
                    <AddButton onClick={() => props.remove(props.carId)}>
                        Удалить
                    </AddButton>

                </div>
            </div>
        </div>
    );
};

export default CarItem;