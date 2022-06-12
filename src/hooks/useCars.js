import {useMemo} from "react";

export const useSortedCars = (cars, sort) => {
    return  useMemo(() => {
        if(sort) {
            return [...cars].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return cars

    }, [sort, cars])


}

export const useCars = (cars, sort, query) => {
    const sortedCars = useSortedCars(cars, sort);


    return useMemo(() => {
        return sortedCars.filter(car => car.brand.label.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedCars])

}