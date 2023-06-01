import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import AppLayout from '@/components/appLayout';
import { DrawerHeader } from '../../components/appLayout/AppDrawer';
import Breadcrumb from '../../components/breadcrumb';
import SearchBar from '../../components/searchBar';
import CustomTabs from '../../components/customTabs';
import CustomDrawer from '../../components/customDrawer';
import { MainContent, Content, LeftSection, RightSection, OpenRegisterSection } from './index.style';

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <Box sx={{ display: 'flex' }}>
        <AppLayout>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <MainContent>
            <LeftSection className='left-section'>
              <Content className='content'>
                <Breadcrumb />
                <SearchBar />
                <CustomTabs />
              </Content>
            </LeftSection>

            <RightSection className='right-section'>
              <Content className='content'>
                  { 
                    registerOpen ? <OpenRegister /> : null
                  }
              </Content>
            </RightSection>
          </MainContent>
        </Box>
      </AppLayout>
    </Box>
  );
}

const OpenRegister = () => {
  return (
    <div style={{ backgroundColor: 'yellow', height: '100vh', marginTop: '30vh'}}>
      <OpenRegisterSection>
      <Button variant="outlined" size="large" style={{color: 'black', backgroundColor: 'white'}}>
        Open Register
      </Button>
    </OpenRegisterSection>
    </div>
  )
}