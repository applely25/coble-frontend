'use client';

import { projectListApi } from '@/api/project';
import { PopularProjectArticle } from '@/components/common';
import { styled } from '@linaria/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function List() {
  const [page, setPage] = useState<number>(0);
  const { data } = useQuery({
    queryKey: ['projectListApi'],
    queryFn: () => projectListApi(page, 6),
  });

  return (
    <Container>
      <PopularProjectContainer>
        {data?.project_list.map((v) => <PopularProjectArticle {...v} />)}
      </PopularProjectContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
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
