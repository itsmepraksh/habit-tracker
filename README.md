## Project Name : Habit Tracker

##### Description :

###### This is an Open Source project. Creating Habit tracker application completely. Tech stack we are using is MERN Stack.

### Features : 

#### 1. Tasks module

- Add / Delete / Edit Tasks
- Graph data representation

#### 2. Authentication module
- Register / Login User


frontend/
│
├── app/                     # App Router pages
│   ├── tracker/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── components/              # Reusable UI components
│   ├── ui/
│   ├── forms/
│   └── tracker/
│
├── services/                # ALL backend API calls
│   ├── auth.service.ts
│   ├── tracker.service.ts
│   └── user.service.ts
│
├── hooks/                   # Custom React hooks
│   ├── useTracker.ts
│   └── useAuth.ts
│
├── types/                   # TypeScript types/interfaces
│   ├── tracker.types.ts
│   └── user.types.ts
│
├── lib/                     # Third-party configurations
│   ├── axios.ts
│   └── utils.ts
│
├── constants/               # Static constants
│   └── api.ts
│
├── utils/                   # Helper functions
│   ├── formatDate.ts
│   └── validators.ts
│
├── public/
│
└── package.json




types pending hai isme folder se leke sab kuch