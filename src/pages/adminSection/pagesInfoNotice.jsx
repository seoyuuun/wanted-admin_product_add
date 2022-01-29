import Contentwrap from "components/layout/Contentwrap";
import InfoNotice from "components/infoNotice/InfoNotice";

const PagesInfoNotice = (props) => {
  return (
    <Contentwrap title="상품 정보 고시">
      <Contentwrap.Main>
        <InfoNotice />
      </Contentwrap.Main>
    </Contentwrap>
  );
};

export default PagesInfoNotice;
