import React from "react";
import AppBarHeader from "./AppBarHeader";
import AppDrawer from "./AppDrawer";

const AppLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };
    return(
        <>
            <AppBarHeader open={open} handleDrawerOpen={handleDrawerOpen} />
            <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
            {children}
        </>
    )
}

export default AppLayout;