import React from 'react';
import AddUpdateInput from "./UI/input/AddUpdateInput";
import SortSelect from "./UI/select/SortSelect";

const CarsFilter = ({filter, setFilter}) => {
    return (
        <div>
            <AddUpdateInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск"
            />
            <SortSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по"
                options={[
                    {value: "color", name: "По Цвету"},
                    {value: "transmission", name: "По КПП"}
                ]}
            />
        </div>
    );
};

export default CarsFilter;