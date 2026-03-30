import styled from "styled-components";
import PropTypes from "prop-types";
import { BASE_URL, Button } from "../../App";
const ResultadoPesquisa = ({ data }) => {
  return (
    <FoodContainer>
      <FoodOptions>
        {data?.map(({name, image, text, price}) => <FoodOption key={name}>
          <div className="comidas_imagem">
            <img src={BASE_URL + image} />
          </div>
          <div className="comida_info">
            <div className="info">
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
            <Button>R$ {price.toFixed(2)}</Button>
          </div>
        </FoodOption>
      )}
      </FoodOptions>
    </FoodContainer>
  );
};

ResultadoPesquisa.propTypes = {
  data: PropTypes.array,
};

export default ResultadoPesquisa;

const FoodContainer = styled.section`
  background-image: url("/tavern.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 210px);
  width: 100%;
  overflow: hidden;
`;

const FoodOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  gap: 20px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;

  padding-top: 40px;
`;

const FoodOption = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 16px;

  .comida_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;