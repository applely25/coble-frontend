'use client';

import { projectListApi } from '@/api/project';
import { PopularProjectArticle } from '@/components/common';
import { styled } from '@linaria/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { flex } from '@/styles';

export default function List() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { data } = useQuery({
    queryKey: ['projectListApi', currentPage],
    queryFn: () => projectListApi(currentPage, 6),
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value - 1);
  };

  return (
    <Container>
      <PopularProjectContainer>
        {data?.project_list.map((v) => <PopularProjectArticle {...v} />)}
      </PopularProjectContainer>
      {data?.total_pages && (
        <Pagination
          count={data?.total_pages}
          page={currentPage + 1}
          onChange={handleChange}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100dvh;
  ${flex.COLUMN_CENTER}
  gap: 50px;
`;

const PopularProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
