import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ResultadoPesquisa from './components/resultadoDePesquisas/ResultadoPesquisa';
import { BASE_URL } from './constants';

const App = () => {
  
const [data, setData] = useState(null);
const [filtro, setFiltro] = useState(null);
const [carregando, setCarregando] = useState(false);
const [error, setError] = useState(null);
const [selecionado, setSelecionado] = useState("O Cardápio");

  useEffect(() => {
      const fetchComidasData = async () => {
        setCarregando(true);
        
        try {
          const response = await fetch(BASE_URL);

          if (!response.ok) {
            throw new Error("Erro ao buscar os dados.");
          }

          const json = await response.json();
          
          setData(json);
          setFiltro(json);
          setCarregando(false);
        } catch (err) {
          setError("Não foi possível carregar os dados.");
          setCarregando(false);
      }
    };
     fetchComidasData();
  }, []);

  const filtrarComidas = (event) => {
    const valor = event.target.value;

    if (valor === "") {
      setFiltro(null);
    }

    const filtragem = data?.filter((comida) => comida.name.toLowerCase().includes(valor.toLowerCase())
    );
    setFiltro(filtragem);
  }

  const filtrarCategoria = (type) => {

    if (type === "O Cardápio") {
    setFiltro(data);
    setSelecionado("O Cardápio");
    return;
  }

  const filtragem = data?.filter((comida) => comida.type.toLowerCase().includes(type.toLowerCase())
    );
    setFiltro(filtragem);
    setSelecionado(type);
};

  const filtroBtns = [
    {
      name: "O Cardápio",
      type: "O Cardápio",
    },
    
    {
      name: "Café da Manhã",
      type: "Café da Manhã",
    },
    
    {
      name: "Almoço",
      type: "Almoço",
    },
    
    {
      name: "Janta",
      type: "Janta",
    },
  ];

  if (carregando) return <div>Carregando...</div>
  if (error) return <div>{error}</div>;
  
  return ( 
    <>
    <Container>
      <HeaderContainer>
        <div className="Logo">
          <img src="/A_Taverna.png" alt="Logo" />
        </div>
        <div className="barra-pesquisa">
          <input onChange={filtrarComidas} placeholder="Pesquisar..." />
        </div>
      </HeaderContainer>
      <FilterContainer>
        {filtroBtns.map((value) => (<Button isSelected={selecionado === value.type} key={value.name} onClick={() => filtrarCategoria(value.type)}>{value.name}</Button>))}
      </FilterContainer>
      <ResultadoPesquisa data={filtro} />
    </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const HeaderContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .barra-pesquisa {
    input {
      background-color: transparent;
      border: 1px solid #EAA64D;
      color: #FFFFFF;
      border-radius: 5px;
      height: 40px;
      padding: 0 10px;
      font-size: 16px;
      &::placeholder {
        color: #FFFFFF;
      }
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 40px;
`;

const Button = styled.button`
  background: ${({isSelected}) => (isSelected ? "#f0a13a" : "#d9953c")};
  outline: 1px solid ${({isSelected}) => (isSelected ? "#FFFFFF" : "#d9953c")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background: #EAA64D;
  }
`;
