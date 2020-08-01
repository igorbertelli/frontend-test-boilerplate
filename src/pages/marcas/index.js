import React from "react";
import { getMarcas } from "../../services";
import { Link } from "react-router-dom";

class Marcas extends React.Component {
  state = {
    marcas: [],
  };

  componentDidMount() {
    getMarcas()
      .then((res) => {
        this.setState({
          marcas: res,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <h1>Hello word</h1>

        <select>
          {this.state.marcas.map((marca) => (
            <option key={marca.codigo} value={marca.codigo}>
              {marca.nome}
            </option>
          ))}
        </select>
        <button>
          <Link to="/modelos"> Modelos</Link>
        </button>
      </>
    );
  }
}

export default Marcas;
