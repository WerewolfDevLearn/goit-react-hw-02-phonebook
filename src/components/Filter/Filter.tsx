import FilterStl from "./Filter.module.css";

export default function Filter({ filter, onChangeFilter }) {
  return (
    <div className={FilterStl.filterContainer}>
      <label className={FilterStl.label}>
        Find contact by name:
        <input type='text' value={filter} onChange={onChangeFilter} name='filter' className={FilterStl.input} />
      </label>
    </div>
  );
}
