### Development is temporarily stopped due to tauri updates; Reconstruction is planned. 

# Anxious
Anxious is an intelligent and powerful program designed to optimize and keep your system running at peak performance. It provides a complete set of functions to clean, optimize and defragment your computer, allowing it to perform at its peak.

Anxious uses advanced algorithms and technologies to detect and remove unnecessary files that can slow down your system, freeing up space on your hard disk. The program is also able to detect and disable unwanted background processes, which can also improve your system's performance.

With Anxious, you can rest assured that your computer will always run at top speed. The program automatically optimizes your system in the background, giving you a constant performance boost without the need for manual intervention.

# The structure of Anxious
```
.
└── /src
    ├── /assets         # Global static files such as images, svg, Anxious logo, etc.
    ├── /components     # Global shared/reusable components such as layouts (wrappers), form components, buttons
    ├── /dashboard      # Can also be called pages, this is where most of the application will be contained.
    ├── /lib            # Utilities, helpers, constants, etc.
    ├── /styles         # The basic style, layout and design of the Anxious web application. 
    ├── Anxious.tsx     # A code fragment that includes support and also describes the structure of the user interface.
    └── main.tsx        # An Anxious snippet that is used to initialize and display a React component.
```

# Recommended IDE Setup

- [Visual Studio Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

# Getting Started
```bash
# clone the repository
git clone https://github.com/aksueikava/Anxious.git
cd Anxious

# install all packages
pnpm i
# run dev server
pnpm tauri dev
# build everything
pnpm tauri build
```

# Update Components

### shadcn/ui

Update all components:

```bash
npx shadcn-ui@latest add --overwrite
# press "a" to select all components
```

Update a specific component:

```bash
npx shadcn-ui@latest add dialog --overwrite
```


![image](https://github.com/aksueikava/Anxious/assets/135703603/d84faa27-07f7-48b7-8ceb-e794f0ae0d21)
