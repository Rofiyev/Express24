import React, { useRef } from "react";
import { getNewItem } from "../../../Redux/actions";
import StyledButtons from "../../ButtonStyled/ButtonStyled";

export default function AddFoodPage() {
  const refForm = useRef(null);

  const getValue = () => {
    const form = refForm.current;

    const newFood = {
      image: form.rasmUrl.value,
      food: form.food.value,
      comment: form.text.value,
      price: form.price.value,
      kategoriya: form.options.value,
    };
    form.reset();
    getNewItem(newFood)
  };

  return (
    <form ref={refForm}>
      <div className="d-flex mb-3">
        <input
          name="rasmUrl"
          type="text"
          placeholder="Rasmga yo'l"
          className="form-control me-3"
        />
        <input
          name="food"
          type="text"
          placeholder="Taom nomi"
          className="form-control"
        />
      </div>
      <textarea
        name="text"
        className="form-control"
        cols="10"
        rows="5"
        placeholder="Tarif"
      />
      <div className="d-flex mt-3">
        <div className="w-50">
          <input
            name="price"
            type="number"
            placeholder="Narxi"
            className="form-control"
          />
        </div>
        <div className="form-group w-50 ms-3">
          <select
            name="options"
            className="form-select"
            aria-label="Default select example"
          >
            <option selected disabled>
              Kategoriya
            </option>
            <option value="salat">Salat</option>
            <option value="sho'rva">Sho'rvalar</option>
            <option value="quyuq ovqat">Quyuq ovqat</option>
            <option value="shirinlik">Shirinlik</option>
            <option value="shirinlik">Ichimlik</option>
          </select>
        </div>
      </div>
      <div className="text-center mt-3">
        <StyledButtons type="button" onClick={getValue} className="fw-bold">
          Qo'shish
        </StyledButtons>
      </div>
    </form>
  );
}
