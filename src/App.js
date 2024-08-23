import React, { useState, useEffect } from "react";
import { Container, Content, Row, Board } from "./styles";
import Input from './components/Input'
import Button from "./components/Button";

const App = () => {

  const [usuario, setUsuario] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [countUser, setCountUser] = useState(0);

  const handleAddUser = () => {
    if (usuario.length >= 3) {
      setUsuarios([...usuarios, usuario])
      setUsuario("")
    }
  }

  useEffect(() => {
    setCountUser(usuarios.length)
  },[usuarios])

  return (
    <Container>
      <Content>
        <div className="App">
          <h1>Adicionar um usuário</h1>
          <Row>
            <Input 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)}
            />
            
            <Button label='+' onClick={handleAddUser} />
          </Row>
            <h1>Contagem: {countUser} </h1>
          <Board>
            <ol>
              {usuarios.map((item) => (
                <li>
                  {item}
                </li>
              ))}
            </ol>
          </Board>
        </div>
      </Content>
    </Container>
  );
}

export default App;
