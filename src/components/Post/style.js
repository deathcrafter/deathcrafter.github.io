import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  min-width: 35rem;
  max-width: 60rem;
  padding: 1.5rem;
`;

export const Markdown = styled(ReactMarkdown)`
  * {
    word-wrap: break-word;
  }
  color: ${({ theme }) => theme.palette.text.default};
  & p {
    font-size: 1.2rem;
    :nth-child(n) {
      padding-bottom: 1rem;
    }
  }
  & ul {
    list-style: square;
    margin-top: 10px;
    font-size: 1rem;
  }
  & li {
    padding-bottom: 2px;
  }
  // Prevent going outside the container
  & img {
    max-width: 100%;
    margin-top: 1rem;
  }
  & a {
    color: ${({ theme }) => theme.palette.secondary.default};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  & h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 1.5rem;
  }

  .md-code {
    border-radius: 6px !important;
    font-family: inherit !important;
    font-size: 1rem !important;
    line-height: 1.5 !important;
    tab-size: 4 !important;
    hyphens: none !important;
    padding: 1em !important;
    margin: 0.5em 0px !important;
    background-color: ${({ theme }) => theme.palette.primary[700]} !important;
    code {
      background-color: transparent !important;
      color: ${({ theme }) => theme.palette.primary[100]} !important;
    }
    & .linenumber {
      color: ${({ theme }) => theme.palette.primary[400]} !important;
    }
  }
`;

export const InlineCodeBlock = styled.span`
  display: inline-block;
  border-radius: 0.3rem;
  padding: 0.125rem 0.2rem;
  background-color: ${({ theme }) => theme.palette.primary[700]};
  color: ${({ theme }) => theme.palette.primary[100]};
`;
