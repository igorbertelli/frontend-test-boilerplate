import React from "react";
import { getMarcas } from "../../services";
import { Link } from "react-router-dom";

class Marcas extends React.Component {
  state = {
    marcas: [],
    marcaSelecionada: "",
  };

  selected = (event) => {
    this.setState({
      marcaSelecionada: event.target.value,
    });
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

        <select onChange={this.selected}>
          {this.state.marcas.map((marca) => (
            <option key={marca.codigo} value={marca.codigo}>
              {marca.nome}
            </option>
          ))}
        </select>
        <button>
          <Link
            to={{
              pathname: "/modelos",
              marcaSelecionada: this.state.marcaSelecionada,
            }}
          >
            Modelos
          </Link>
        </button>
      </>
    );
  }
}

export default Marcas;
