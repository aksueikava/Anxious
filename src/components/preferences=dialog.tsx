import { useState } from "react"
import logo from "@/assets/logo.png"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { UpdateIcon } from "@radix-ui/react-icons"
import { getName, getTauriVersion, getVersion } from "@tauri-apps/plugin-app"
import { arch } from "@tauri-apps/plugin-os"
import { open } from "@tauri-apps/plugin-shell"
import { GithubIcon, HomeIcon, SendIcon, } from "lucide-react"

import { Icons } from "./icons"
import { Button, buttonVariants } from "./ui/button"
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "./ui/dialog"

export function AboutDialog() { const [updateText, setUpdateText] = useState("")
  const [version, setVersion] = useState("")
  const [name, setName] = useState("")
  const [tauriVersion, setTauriVersion] = useState("")
  const [arc, setArc] = useState("")
  getVersion().then((x) => setVersion(x))
  getName().then((x) => setName(x))
  getTauriVersion().then((x) => setTauriVersion(x))
  arch().then((x) => setArc(x))

  return (
    <DialogContent className="overflow-clip pb-2">
      <DialogHeader className="flex items-center text-center">
        <div className="rounded-full bg-background p-[6px] text-slate-600 drop-shadow-none transition duration-1000 hover:text-slate-800 hover:drop-shadow-[0_0px_10px_rgba(0,10,50,0.50)] dark:hover:text-slate-400 ">
          <img src={logo} className="h-16 w-16" />
        </div>

        <DialogTitle className="flex flex-col items-center gap-2 pt-2">
          <span className="capitalize">{name}</span>
          <span className="flex gap-1 font-mono text-xs font-medium">
            Version {version} ({arc})
            <span className="font-sans font-medium text-gray-400">
              (
              <span
                className="cursor-pointer text-blue-500"
                onClick={() =>
                  open("https://github.com/aksueikava/anxious/releases/tag/v0.1.0")
                }
              >
                release notes
              </span>
              )
            </span>
          </span>
        </DialogTitle>

        <DialogDescription className=" text-foreground">
          Anxious - это интеллектуальная и мощная программа, предназначенная для оптимизации и поддержания максимальной производительности вашей системы. Она обеспечивает полный набор функций для очистки, оптимизации и дефрагментации вашего компьютера, позволяя ему работать на пике своих возможностей.
          <br/><br/>
          Anxious использует передовые алгоритмы и технологии для обнаружения и удаления ненужных файлов, которые могут замедлять работу вашей системы, освобождая место на жестком диске. Программа также умеет обнаруживать и отключать нежелательные фоновые процессы, что также может повысить производительность вашей системы.
          <br/><br/>
          С Anxious, вы можете быть уверены, что ваш компьютер всегда будет работать на максимальной скорости. Программа автоматически оптимизирует вашу систему в фоновом режиме, обеспечивая вам постоянное повышение производительности без необходимости ручного вмешательства.
        </DialogDescription>

        <span className="text-xs text-gray-400">{updateText}</span>
        <DialogDescription className="flex flex-row"></DialogDescription>
      </DialogHeader>

      <span className="font-mono text-xs font-medium text-gray-400">
        Tauri version: {tauriVersion}
      </span>
      <DialogFooter className="flex flex-row items-center border-t pt-2 text-slate-400 ">
        <div className="mr-auto flex flex-row gap-2">
          <HomeIcon
            className="h-5 w-5 cursor-pointer transition hover:text-slate-300"
            onClick={() => open("https://github.com/aksueikava/anxious")}
          />
          <GithubIcon
            className="h-5 w-5 cursor-pointer transition hover:text-slate-300 "
            onClick={() => open("https://github.com/aksueikava/anxious")}
          />
          <SendIcon
            className="h-5 w-5 cursor-pointer transition hover:text-slate-300 "
            onClick={() => open("https://t.me/+WROuKP4DCopmOGY6")}
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          className="h-7 gap-1"
          onClick={() => setUpdateText("You have the latest version.")}
        >
          <UpdateIcon /> Check for Updates
        </Button>
        <DialogPrimitive.Close
          type="submit"
          className={buttonVariants({ variant: "ghost", className: "h-7" })}
        >
          Close
        </DialogPrimitive.Close>
      </DialogFooter>
    </DialogContent>
  )
}
