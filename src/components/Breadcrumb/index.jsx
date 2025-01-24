import React from 'react'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });
const Breadcrumb = ({title, sourceName, sourceIcon, destinationName}) => {
    // function handleClick(event) {
    //     event.preventDefault();
    //     console.info('You clicked a breadcrumb.');
    //   }
  return (
    <>
      <div className='card cardCustom shadow border-0 w-100 flex-row p-4'>
        <h5 className='mb-0'>{title}</h5>
      <Breadcrumbs aria-label="breadcrumb" className='ml-auto breadcrumbs_'>
        <StyledBreadcrumb label={sourceName} icon={sourceIcon}/>
        <StyledBreadcrumb label={destinationName} />
      </Breadcrumbs>
    </div>
    </>
  )
}

export default Breadcrumb;