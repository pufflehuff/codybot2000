import React from 'react';
import styled from 'styled-components';
import Rating from './Rating.jsx';

const Entry = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #A9CEF4;
  border-top: none;
  padding: 25px 50px;
  height: 250px;
  width: 1000px;
  color: #EAB464;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  cursor: pointer;
`;

const Tag = styled.button`
  background: #EAB464;
  margin-right: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const Difficulty = styled.span`
  font-size: 16px;
  color: ${({ diff }) =>
    diff === 'hard' ? 'red' : (diff === 'medium' ? 'orange' : 'green')
  };
  cursor: pointer;
`;

const Comments = styled.button`
  background: #597081;
  margin-right: 5px;
  border-radius: 5px;
  border: none;
  color: #A9CEF4;
  height: 40px;
  width: 100px;
  cursor: pointer;
`;

export default function ToyProblem({ problem }) {

  const { name, prompt, tags, difficulty, upvotes, downvotes, rating, timstamp, author } = problem;

  return (
    <Entry>
      <Section className="title-bar">
        <Title>
          <h2>{name}</h2>
        </Title>
        <Difficulty diff={difficulty}>{difficulty}</Difficulty>
      </Section>
      <Section className="attributes-bar">
        <Rating rating={rating} />
        <span>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </span>
        <Comments>Comments</Comments>
      </Section>
    </Entry>
  );
}
