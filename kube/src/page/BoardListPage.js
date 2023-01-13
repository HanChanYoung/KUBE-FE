import * as React from 'react';
import Header from "../component/public/Header";
import { Button, Modal, Box, TextField } from "@mui/material";

import ImageSlider from '../component/boardlist/ImageSlider';
import BoardList from '../component/boardlist/BoardList';

export default function BoardListPage () {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{width:"100%"}}>
            <Header />
            <div>
                <div>
                    <div style={{height:"360px",
                                overflow:"hidden"}}>
                        <ImageSlider />
                    </div>
                    <div style={{width:"100%",
                                height:"160px",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",}}>                     
                        <div style={{width:"85%",
                                    justifyContent:"space-between",
                                    display:"flex",
                                    alignItems:"center",
                                    padding:"20px",}}>
                            <Button style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px", padding:"5px",
                                            background:"#202225"}}>PACKAGE</Button>
                            <Button style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>Tent / Tarp</Button>
                            <Button style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Bedding
                            Seasonal items</Button>
                            <Button style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Chair / Table
                            Furniture</Button>
                            <Button style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Brazier / Burner
                            Others</Button>
                            <Button style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Coppel / Ice box
                            Tableware</Button>
                        </div>
                    </div>
                    <div style={{width:"100%",height:"56px"}}>
                        <Button onClick={handleOpen}
                                style={{color:"black",fontSize:"20px",
                                        width:"141px", height:"56px",
                                        float:"right", marginRight:"30px"
                                        }}>세부검색</Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 400,
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                                backgroundColor:"white"
                            }}>
                                <h2>Text</h2>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            </Box>
                        </Modal>
                    </div>
                    <BoardList />  
                </div>
            </div>
        </div>
    )
}