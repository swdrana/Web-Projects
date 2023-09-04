import styled from 'styled-components';
import TopCategoryCart from './TopCategoryCart/TopCategoryCart';

const CatBorder = styled.div`
  border: 2px dashed #fd7e14;
  border-radius:10px;
  padding: 40px 32px;
`;

const OurTopCategory = () => {

  return (
    <div className=' container mx-auto relative'>
      <h2 className=' text-center text-2xl'>Our Top Categories</h2>
      <CatBorder>
        <TopCategoryCart/>
      </CatBorder>
    </div>
  );
};

export default OurTopCategory;
