import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CodeComponent } from 'react-markdown/lib/ast-to-react'
import styled from '@emotion/styled'
import NordTheme from '../lib/nord-theme'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const CodeBlockWrapper = styled.div`
  position: relative;
`

const CodeBlockTitle = styled.div`
  background: ${NordTheme.nord3};
  display: table;
  color: ${NordTheme.nord4};
  padding: 0 0.5em;
`

const InlineCodeBloack = styled.code`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0;
  padding: 0 0.2em;
`

const CodeBlock: CodeComponent = ({
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)(:.+)/.exec(className || '')
  const title = match && match[2] ? match[2].slice(1) : ''

  return !inline && match ? (
    <CodeBlockWrapper>
      <CodeBlockTitle>{title}</CodeBlockTitle>
      <SyntaxHighlighter
        style={nord}
        language={match[1]}
        customStyle={{
          border: '1px solid #4c566a',
          marginTop: 0,
          borderRadius: 0,
        }}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </CodeBlockWrapper>
  ) : (
    <InlineCodeBloack className={className} {...props}>
      {children}
    </InlineCodeBloack>
  )
}

const PostBody = ({ content }: Props) => {
  return (
    <ReactMarkdown
      className={markdownStyles['markdown']}
      components={{ code: CodeBlock }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default PostBody
