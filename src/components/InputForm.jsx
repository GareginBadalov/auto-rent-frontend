import React, {useState} from 'react';
import AddUpdateInput from "./UI/input/AddUpdateInput";
import AddButton from "./UI/button/AddButton";

const InputForm = ({create}) => {
        const [car, setCar] = useState({

                brand_id: '',
                year: '',
                mileage: '',
                model: '',
                color: '',
                transmission: '',
                body_style: '',
                price: '',})

        const addNewCar = (e) => {
                e.preventDefault()
                const newCar = {
                        ...car, id: Date.now()
                }
                create(newCar.brand_id, newCar.model, newCar.year, newCar.mileage, newCar.color, newCar.transmission, newCar.body_style, newCar.price)
                setCar({brand_id: '', model: '', year: '', mileage: '', color: '',
                        transmission: '', body_style: '', price: '',})

        }
    return (
        <form>
            <AddUpdateInput
                value={car.brand_id}
                onChange={e => setCar({...car, brand_id: e.target.value})}
                type="text"
                placeholder="Марка"
            />
            <AddUpdateInput value={car.model}
                            onChange={e => setCar({...car, model: e.target.value})}
                            type="text"
                            placeholder="Модель"
            />

            <AddUpdateInput value={car.year}
                            onChange={e => setCar({...car, year: e.target.value})}
                            type="text"
                            placeholder="Год Выпуска"
            />
            <AddUpdateInput value={car.mileage}
                            onChange={e => setCar({...car, mileage: e.target.value})}
                            type="text"
                            placeholder="Пробег"
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
                        <option  value="Sedan">Седан</option>
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

            <AddButton onClick={addNewCar}>Добавить Машину</AddButton>
        </form>
    );
};

export default InputForm;