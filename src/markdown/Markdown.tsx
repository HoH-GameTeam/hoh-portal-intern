import ReactMarkdown from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { Divider, Link, Typography } from '@mui/material';

import StyledMarkdown from './styles';
import { MarkdownProps } from './types';

// ----------------------------------------------------------------------

export default function Markdown({ sx, ...other }: MarkdownProps) {
  return (
    <StyledMarkdown sx={sx}>
      <ReactMarkdown
        rehypePlugins={[
          rehypeRaw,
          rehypeHighlight,
          [remarkGfm, { singleTilde: false }],
        ]}
        components={components}
        {...other}
      />
    </StyledMarkdown>
  );
}

// ----------------------------------------------------------------------

const components = {
  h1: ({ ...props }) => (
    <Typography whiteSpace="pre-wrap" variant="h1" gutterBottom {...props} />
  ),
  h2: ({ ...props }) => (
    <Typography whiteSpace="pre-wrap" variant="h2" gutterBottom {...props} />
  ),
  h3: ({ ...props }) => (
    <Typography whiteSpace="pre-wrap" variant="h3" gutterBottom {...props} />
  ),
  h4: ({ ...props }) => (
    <Typography whiteSpace="pre-wrap" variant="h4" gutterBottom {...props} />
  ),
  h5: ({ ...props }) => (
    <Typography whiteSpace="pre-wrap" variant="h5" gutterBottom {...props} />
  ),
  h6: ({ ...props }) => (
    <Typography whiteSpace="pre-wrap" variant="h6" gutterBottom {...props} />
  ),
  p: ({ ...props }) => (
    <Typography whiteSpace="pre-wrap" paragraph {...props} />
  ),
  hr: ({ ...props }) => <Divider sx={{ my: 3 }} {...props} />,
  a: ({ ...props }) => {
    const isHttp = props.href.includes('http');

    return isHttp ? (
      <Link target="_blank" rel="noopener" {...props} />
    ) : (
      <Link component={RouterLink} to={props.href} {...props}>
        {props.children}
      </Link>
    );
  },
};
