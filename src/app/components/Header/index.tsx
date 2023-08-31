import React from "react";

import { useDispatch } from 'react-redux'
import { switchTheme } from '../../redux/settingsSlice'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button,
    User,
    Switch,
    Link,
    Image
} from '@nextui-org/react'
import SwitchItem from "../Switch";
import { useTheme } from "@/app/hooks/useTheme";
import { useDemension } from "@/app/hooks/useDimension";


const Header = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {width} = useDemension();
    return (
        <Navbar 
            className={theme.name + " bg-background"}
            isBordered={true}
            isBlurred={true}
        >
            <NavbarBrand>
                <Link href='/' color='foreground' className='font-bold'>
                    <Image
                        src='/favicon.ico'
                        height={36}
                        width={36}
                    />
                    <p className="ml-2 font-bold">
                        IOT PTIT
                    </p>
                </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <SwitchItem
                        theme={theme}
                        isSelected={theme.isDark}
                        label={theme.name}
                        onClick={() => dispatch(switchTheme())}
                    />
                </NavbarItem>
                <Dropdown className={theme.name}>
                    <DropdownTrigger className="cursor-pointer">
                        <User
                            name={width > 768 ? "Đỗ Hoàng Quân": null}
                            description={(
                                <Link 
                                    href="/profile" 
                                    className={"text-primary font-normal hidden md:block"}>
                                        @nyagami
                                </Link>
                            )}
                            avatarProps={{
                                isBordered: true,
                                src: "https://i1.sndcdn.com/avatars-000337262852-um0hwu-t500x500.jpg",
                                color: 'primary'
                            }}
                            className="font-bold text-foreground"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" color='primary' variant="faded" >
                        <DropdownItem>
                            <Link className="w-full h-full" href="/profile">Profile</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link href="/dashboard" className="w-full h-full">Dashboard</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
};

export default Header;
