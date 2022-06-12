import React, {useState} from 'react';
import AddUpdateInput from "./UI/input/AddUpdateInput";
import AddButton from "./UI/button/AddButton";

const UpdateForm = ({update, carId}) => {
        const [car, setCar] = useState({
                brand: '',
                model: '',
                color: '',
                transmission: '',
                body_style: '',
                price: '',})

        const changeCar = (e) => {
                e.preventDefault()

                update(carId, car.brand, car.model, car.color, car.transmission, car.body_style, car.price)
                setCar({brand: '', model: '', color: '',
                        transmission: '', body_style: '', price: '',})

        }
    return (
        <form>
            <AddUpdateInput
                value={car.brand}
                onChange={e => setCar({...car, brand: e.target.value})}
                type="text"
                placeholder="Марка"
            />
            <AddUpdateInput value={car.model}
                            onChange={e => setCar({...car, model: e.target.value})}
                            type="text"
                            placeholder="Модель"
            />
            <AddUpdateInput value={car.color}
                            onChange={e => setCar({...car, color: e.target.value})}
                            type="text"
                            placeholder="Цвет"
            />
                <select className='AddUpdateSelect' value={car.transmission}
                        onChange={e => setCar({...car, transmission: e.target.value})}>
                        <option value="Auto">Автоматическая</option>
                        <option value="CVT">Роботизированная</option>
                        <option value="Manual">Механическая</option>

                </select>
                <select className="AddUpdateSelect" value={car.body_style}
                        onChange={e => setCar({...car, body_style: e.target.value})}>
                        <option value="Sedan">Седан</option>
                        <option value="Hatchback">Хэтчбэк</option>
                        <option value="Liftback">Лифтбэк</option>
                        <option value="Off-road vehicle">Внедорожник</option>
                        <option value="Station wagon">Универсал</option>
                        <option value="Coupe">Купе</option>
                        <option value="Minivan">Минивэн</option>
                        <option value="Pickup truck">Пикап</option>
                        <option value="Limousine">Лимузин</option>
                        <option value="Van">Фургон</option>
                        <option value="Cabriolet">Кабриолет</option>

                </select>
            <AddUpdateInput value={car.price}
                            onChange={e => setCar({...car, price: e.target.value})}
                            type="text"
                            placeholder="Цена"
            />

            <AddButton onClick={changeCar}>Изменить</AddButton>
        </form>
    );
};

export default UpdateForm;