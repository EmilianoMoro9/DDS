import axios from "axios";
const url = "http://localhost:3001/ingresos";

const getIngresos = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error al obtener todos los ingresos: ", error);
    throw error;
  }
};

const saveIngreso = async (ingreso) => {
  try {
    const response = await axios.post(url, ingreso, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear el ingreso: ", error);
    throw error;
  }
};

const ingresosService = {
  getIngresos,
  saveIngreso,
};

export default ingresosService;
