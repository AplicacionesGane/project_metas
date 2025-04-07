import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MetaXhora() {
  const ulrparam = useParams();
  const { producto, sucursal } = ulrparam;

  useEffect(() => {
    axios.get(`/vantaxhora`, { params: { producto, sucursal } })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })

  }, [producto, sucursal]);

  
  return (
    <div>
      <h1>MetaXhora</h1>
      <p>This is the MetaXhora page.</p>
    </div>
  );
}