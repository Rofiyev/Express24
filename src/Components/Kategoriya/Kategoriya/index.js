import React, { useRef } from "react";
import { getNewKategoriy } from "../../../Redux/actions";
import StyledButtons from "../../ButtonStyled/ButtonStyled";

export default function KategoriyaPage() {
  const ref = useRef(null);

  const getValue = () => {
    const form = ref.current;

    const kategoriyaForm = {
      kategoriya: form.text.value,
    };
    form.reset();
    getNewKategoriy(kategoriyaForm.kategoriya);
  };

  return (
    <form ref={ref}>
      <input
        name="text"
        type="text"
        className="form-control mt-3"
        placeholder="Kategoriya nomi"
      />
      <div className="text-center mt-4">
        <StyledButtons type="button" onClick={getValue} className="fw-bold">
          Qo'shish
        </StyledButtons>
      </div>
    </form>
  );
}
