import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletters";
import Footer from "../components/Footer";
import { useState } from "react";
import { useLocation } from 'react-router-dom'

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
 `;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
 `;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters , setFilters] = useState({}); 
    const [sort , setSort] = useState("newest"); 

    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters ,
        [e.target.name] : value,
      })
    }

    return (
        <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
 
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={ e => setSort(e.target.value)}>
              <Option value="newest" >Newest</Option>
              <Option value = "asc">Price (asc)</Option>
              <Option value = "desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat={category} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
      </Container>
    )
}

export default ProductList
