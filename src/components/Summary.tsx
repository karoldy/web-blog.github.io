import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IProps {
  children?: any
}

const Summary: React.FC<IProps> = (props) => {
  return (
    <Accordion className='summary'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        点击展开/折叠
      </AccordionSummary>
      <AccordionDetails>
        { props.children }
      </AccordionDetails>
    </Accordion>
  );
}

export default Summary