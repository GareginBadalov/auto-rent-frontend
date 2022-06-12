import React, {useEffect, useState} from "react";
import './styles/App.css'
import CarList from "./components/CarList";
import InputForm from "./components/InputForm";
import CarsFilter from "./components/CarsFilter";
import AddModal from "./components/Modal/AddModal";
import AddButton from "./components/UI/button/AddButton";
import {useCars} from "./hooks/useCars";
import PostService from "./API/PostService";


function App() {
    const [cars, setCars] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const sortedAndSearchedCars = useCars(cars, filter.sort, filter.query)

    useEffect(() => {
        fetchCars()
    }, [])


    async function fetchCars() {

        const cars = await PostService.getAll()
        setCars(cars)
    }


    async function postCreateCar(brand, model, year, mileage, color, transmission, bodyStyle, price) {

        await PostService.createCar(brand, model, year, mileage, color,
            transmission, bodyStyle, price)
        fetchCars()
        setModal(false)
    }

    async function updateCar(id, brand, model, year, mileage, color, transmission, bodyStyle, price) {

        await PostService.changeCar(id, brand, model, year, mileage, color,
            transmission, bodyStyle, price)
        fetchCars()
        setUpdateModal(false)



    }


    async function deleteCar(id) {
        await PostService.deleteCar(id)
        fetchCars()
        // setCars(cars.filter(p => p.id !== car.id))
    }



  return (
    <div className="App">
        <AddButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Добавить Машину!
        </AddButton>
        <AddModal visible={modal} setVisible={setModal}>
            <InputForm create={postCreateCar}/>
        </AddModal>
        <CarsFilter
            filter={filter}
            setFilter={setFilter}
        />
        <CarList remove={deleteCar} cars={sortedAndSearchedCars} update={updateCar} title="Список машин на аренду" modal={updateModal} setModal={setUpdateModal}/>
    </div>
  ); 
}

export default App;
