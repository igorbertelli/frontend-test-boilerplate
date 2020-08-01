import React from "react";
import { getModelos } from "../../services";

class Modelos extends React.Component {
  state = {
    modelos: [],
    anos: [],
  };

  componentDidMount() {
    getModelos(this.props.location.marcaSelecionada)
      .then((res) => {
        this.setState(
          {
            modelos: res.modelos,
            anos: res.anos,
          },
          () => console.log(this.state.anos)
        );
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <h1>Página de modelos</h1>
        <select>
          {this.state.modelos.map((modelo) => {
            return (
              <option key={modelo.codigo} value={modelo.codigo}>
                {modelo.nome}
              </option>
            );
          })}
        </select>

        <select>
          {this.state.anos.map((ano) => {
            return (
              <option key={ano.codigo} value={ano.codigo}>
                {ano.nome}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}

export default Modelos;
