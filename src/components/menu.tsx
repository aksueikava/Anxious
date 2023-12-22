"use client"

import { useCallback, useEffect, useState } from "react"
import logo from "@/assets/logo.png"
import { WindowTitlebar } from "tauri-controls"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { AboutDialog } from "./about-dialog"
import { MenuModeToggle } from "./menu-mode-toggle"
import { Dialog, DialogTrigger } from "./ui/dialog"

export function Menu() {
  const closeWindow = useCallback(async () => {
    const { appWindow } = await import("@tauri-apps/plugin-window")

    appWindow.close()
  }, [])

  return (
    <WindowTitlebar
    controlsOrder="platform"
    windowControlsProps={{ platform: "macos", className: "" }}
    >
      <Menubar className="rounded-none border-b border-none pl-2 lg:pl-3">
        <MenubarMenu>
          <div className="inline-flex h-fit w-fit items-center text-cyan-500">
            <img src={logo} className="h-9 w-9" />
          </div>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="font-bold">Anxious Stable</MenubarTrigger>
          <Dialog modal={false}>
            <MenubarContent>
              <DialogTrigger asChild>
                <MenubarItem>О программе</MenubarItem>
              </DialogTrigger>

              <MenubarSeparator />
              <MenubarItem disabled>
                Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem disabled>
                Text <MenubarShortcut>⌘H</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Text <MenubarShortcut>⇧⌘H</MenubarShortcut>
              </MenubarItem>
              <MenubarShortcut />
              <MenubarItem onClick={closeWindow} disabled>
                Text <MenubarShortcut>⌘Q</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
            <AboutDialog />
          </Dialog>
        </MenubarMenu>
        <MenuModeToggle />
      </Menubar>
    </WindowTitlebar>
  )
}
