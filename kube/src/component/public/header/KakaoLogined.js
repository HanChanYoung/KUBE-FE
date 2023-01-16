import { Box, Avatar, Menu, MenuItem, ListItemIcon, IconButton, Tooltip } from "@mui/material"
import { Create, Person, Settings, Logout } from "@mui/icons-material"
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { SET_LOGOUT } from "../../../state/slice/LoginSlice";

export default function KakaoLogined(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate=useNavigate();
    const {Kakao}=window;
    const dispatch=useDispatch();
    return(
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                onClick={()=>{navigate("/bcp")}}>
                    <ListItemIcon>
                    <Create fontSize="small" />
                    </ListItemIcon>
                    게시물 작성
                </MenuItem>

                <MenuItem onClick={()=>{navigate("/mypage")}}>
                <ListItemIcon>
                    <Person fontSize="small" />
                </ListItemIcon>
                My Page
                </MenuItem>

                {/* <MenuItem>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
                </MenuItem> */}
                
                <MenuItem onClick={()=>{
                    Kakao.API.request({
                    url: '/v1/user/unlink',
                    })
                    .then(function(response) {
                        console.log(response);
                        dispatch(SET_LOGOUT());
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                }}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
                </MenuItem>
            </Menu>

        </React.Fragment>
    )
}