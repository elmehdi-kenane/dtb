<h1 align="center"><strong>Digital Tasks Board</strong></h1>

## Project Overview

- MERN MVC

## Services provided:

- Good note-taking system/mind mapping system.
- Quantifiable weekly performance tracking.
- Statistics dashboard that has weeks stamped with a note about overall emotional/mental state during that period.

## The database schemas:

- User

  - id
  - username
  - first name
  - last name
  - email
  - passwordhash
  - isVerified
  - verificationToken
  - [ Cycles ]

- Cycle

  - [ Tasks ]
  - start date
  - deadline (optional)

- Task

  - Cycle id
  - title
  - description
  - priority
  - progress

## Autosave system

cluegi

## Views

- signin/signup
- cycle management
- cycle statistics
- settings

## Tasks

- [ ] design context menu system
- [ ] design modular flickering of divs on validation error.
- [ ] implement recurring tasks feature
- [ ] figure out an accent color (probably orange)
- [ ] set a small horizontal bar that differentiates tasks based on priority (they should be sorted).
- [ ] rich markdown text editor for notes component that behaves like discord text form parsing.
- [ ] configure shadcn and use it for all complex components

### Yapping

- should use radix library for context menu and dialogs and alerts most likely
  - task context menu https://www.radix-ui.com/primitives/docs/components/context-menu
- task list should view the tasks, and sort them
- add feature to make checkboxes in description of tasks
