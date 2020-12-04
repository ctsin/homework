import React from "react";
import styled from "styled-components";
import img from "assets/give.jpg";
import { STYLES } from "constants/styles";

type WordPropKeys = "word";
type WordPropOptionalKeys = "img" | "pronunciation";
type WordPropsOptional = Partial<Record<WordPropOptionalKeys, string>>;
type WordPropsRequired = Record<WordPropKeys, string>;
type WordProps = WordPropsRequired & WordPropsOptional;

const words: WordProps[] = [
  {
    word: "hello",
    img:
      "https://media.bizj.us/view/img/10305572/howtogivecharities*1200xx3865-2178-0-397.jpg",
    pronunciation: "",
  },
  { word: "please", img, pronunciation: "" },
  { word: "give", img: "", pronunciation: "" },
  { word: "it", img: "", pronunciation: "" },
  { word: "to", img: "", pronunciation: "" },
  { word: "me", img: "", pronunciation: "" },
];

export const WordGrid = () => {
  const onClick: (word: string) => void = (word) => {
    console.log(word);
  };

  return (
    <GridContainer>
      {words.map(({ word, ...rest }) => (
        <Grid onClick={() => onClick(word)} key={word} {...rest}>
          <Item>{word}</Item>
        </Grid>
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`;

const Grid = styled.div<Readonly<WordPropsOptional>>`
  display: flex;
  flex: 0 0 50%;
  align-items: center;
  justify-content: center;
  border: 1px none ${STYLES.BORDER};
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  &:nth-child(1),
  &:nth-child(2) {
    border-top-style: none;
  }
  &:nth-child(odd) {
    border-right-style: solid;
    border-bottom-style: solid;
  }
  &:nth-child(even) {
    border-bottom-style: solid;
  }
  &:nth-last-child(1),
  &:nth-last-child(2) {
    border-bottom-style: none;
  }
`;

const Item = styled.span`
  font-size: 2em;
  font-weight: bold;
`;
