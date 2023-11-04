import swal from 'sweetalert';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore"; 
import "./ConfirmarCompra.css"
function ConfirmarCompra({ actualizarCarrito }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    confirmEmail: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === formData.confirmEmail) {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        });
        console.log("Document written with ID: ", docRef.id);

        setTimeout(() => {
          actualizarCarrito([]);
          swal({
            text: `Compra finalizada exitosamente, este es su ID de compra: ${docRef.id}`,
            icon: 'success',
          });
        }, 1000);

        const confirmarElement = document.getElementById('confirmar');
        ReactDOM.render(<div></div>, confirmarElement);
      } catch (error) {
        console.error('Error al guardar los datos en Firestore: ', error);
      }
    } else {
      setErrorMessage('Los correos electrónicos no coinciden. Por favor, verifica.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirmación de Correo Electrónico:</label>
          <input
            type="email"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default ConfirmarCompra;
