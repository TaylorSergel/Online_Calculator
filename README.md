<!-- # Hex Calculator — TDD Online Course

## Course Overview

This repository is the companion codebase for the **Hex Calculator TDD Course**, a four-part
online course that guides you through building a hexadecimal calculator application using
**Test-Driven Development (TDD)**.

By the end of this course, you will have built, tested, containerised, and deployed a fully
functional hex calculator application.

---

## Calculator Specification

The calculator performs basic arithmetic on **hexadecimal numbers** with the following rules:

| Rule | Detail |
|---|---|
| Supported operations | Addition, Subtraction, Multiplication, Division |
| Input limit | Max **2 hex digits** per operand (0x00 – 0xFF) |
| Output limit | Max **4 hex digits** (0x0000 – 0xFFFF) |
| No negative results | Operations that would produce a negative result are rejected |
| No decimal results | Results are always whole numbers (integer division) |

---

## Course Sections

| Branch | Section | Description |
|---|---|---|
| `section-1` | Functional Requirements & Repo Setup | Define requirements, set up GitHub and CI |
| `section-2` | Writing Tests & Drafting Code | TDD cycle — write tests, write code, repeat |
| `section-3` | Testing the GUI | Build and test the frontend calculator UI |
| `section-4` | Containers & Cloud Deployment | Dockerise and deploy to AWS |

> Navigate to each branch to see the state of the codebase at the end of that section.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) *(Section 4 only)*

### Clone the Repository
```bash
git clone https://github.com/TaylorSergel/Online_Calculator.git
cd Online_Calculator
```

### Switch to a Section Branch
```bash
git checkout section-1   # or section-2, section-3, section-4
```

---

## Git Workflow

This project follows a feature-branch workflow:

1. All new features and fixes are developed on a dedicated `feature/` branch
2. Changes are merged into the relevant `section-X` branch via a Pull Request
3. Section branches are **never deleted** — they act as course checkpoints
4. Feature branches are deleted after merging
```
main
├── section-1
├── section-2
├── section-3
└── section-4
```

---

## CI/CD

This repository uses **GitHub Actions** for automated testing.
The pipeline runs on every push and pull request to any branch.

- Section 2 onwards: unit tests run automatically
- Section 3 onwards: GUI tests run automatically

---

## License

This project is created for educational purposes as part of IMY 772. -->

<div align="center">
  <img src="section-1_Videos\Presented by Alisha Perumal and Taylor Sergel.png" alt="Hex Calculator TDD Course Banner" width="100%"/>
</div>

---

## Course Overview

This repository is the companion codebase for the **Hex Calculator TDD Course**, a four-part
online course that guides you through building a hexadecimal calculator application using
**Test-Driven Development (TDD)**.

By the end of this course, you will have built, tested, containerised, and deployed a fully
functional hex calculator application.

---

##  Calculator Specification

The calculator performs basic arithmetic on **hexadecimal numbers** with the following rules:

| Rule | Detail |
|---|---|
| Supported operations | Addition, Subtraction, Multiplication, Division |
| Input limit | Max **2 hex digits** per operand (0x00 – 0xFF) |
| Output limit | Max **4 hex digits** (0x0000 – 0xFFFF) |
| No negative results | Operations that would produce a negative result are rejected |
| No decimal results | Results are always whole numbers (integer division) |

---

## Course Sections

| Branch | Section | Description |
|---|---|---|
| `section-1` | Functional Requirements & Repo Setup | Define requirements, set up GitHub and CI |
| `section-2` | Writing Tests & Drafting Code | TDD cycle — write tests, write code, repeat |
| `section-3` | Testing the GUI | Build and test the frontend calculator UI |
| `section-4` | Containers & Cloud Deployment | Dockerise and deploy to AWS |

>  Navigate to each branch to see the state of the codebase at the end of that section.

---

## Course Videos

<details>
<summary><strong>Section 1 — Functional Requirements & Repo Setup</strong></summary>
<br/>

>  Branch: `section-1`

| # | Video | Topics Covered |
|---|---|---|
| 1 | [▶ Course Introduction & Project Overview](#) | Calculator spec, TDD explanation, course roadmap | 
| 2 | [▶ Deriving Functional Requirements](#) | Requirements doc, category groupings, traceability IDs | 
| 3 | [▶ Setting Up the GitHub Repository](#) | Repo creation, branch strategy, first commit | 
| 4 | [▶ Introduction to GitHub Actions](#) | CI pipeline setup, ci.yml walkthrough, live push | 

</details>

---

<details>
<summary><strong> Section 2 — Writing Tests & Drafting Code</strong></summary>
<br/>

>  Branch: `section-2`
<!-- 
| # | Video | Topics Covered | 
|---|---|---|
| 1 | [▶ Video Title Placeholder](#) | Setting up the testing library | 
| 2 | [▶ Video Title Placeholder](#) | Writing initial unit tests | 
| 3 | [▶ Video Title Placeholder](#) | Drafting calculator logic to pass tests |
| 4 | [▶ Video Title Placeholder](#) | Amending tests and improving functions | -->

</details>

---

<details>
<summary><strong> Section 3 — Testing the GUI</strong></summary>
<br/>

>  Branch: `section-3`

<!-- | # | Video | Topics Covered | 
|---|---|---|
| 1 | [▶ Video Title Placeholder](#) | Building the calculator frontend | 
| 2 | [▶ Video Title Placeholder](#) | Linking buttons to calculator logic | 
| 3 | [▶ Video Title Placeholder](#) | Writing and running GUI tests | 
| 4 | [▶ Video Title Placeholder](#) | Updating GitHub Actions for GUI tests |  -->

</details>

---

<details>
<summary><strong> Section 4 — Containers & Cloud Deployment</strong></summary>
<br/>

>  Branch: `section-4`
<!-- 
| # | Video | Topics Covered | 
|---|---|---|
| 1 | [▶ Video Title Placeholder](#) | Introduction to Docker & containerisation | 
| 2 | [▶ Video Title Placeholder](#) | Writing the Dockerfile | 
| 3 | [▶ Video Title Placeholder](#) | Deploying to AWS | 
| 4 | [▶ Video Title Placeholder](#) | Hiding API keys and final checks |  -->

</details>

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) 

### Clone the Repository
```bash
git clone https://github.com/TaylorSergel/Online_Calculator.git
cd Online_Calculator
```

### Switch to a Section Branch
```bash
git checkout section-1   
```

---

##  Git Workflow

This project follows a **feature-branch workflow**:

1. All new features and fixes are developed on a dedicated `feature/` branch
2. Changes are merged into the relevant `section-X` branch via a **Pull Request**
3. Section branches are **never deleted** — they act as course checkpoints
4. Feature branches are deleted after merging

```
main
├── section-1
│   └── feature/functional-requirements  ← merged & deleted
├── section-2
├── section-3
└── section-4
```

---

##  CI/CD

This repository uses **GitHub Actions** for automated testing.
The pipeline runs on every push and pull request to any branch.

| Section | What Runs |
|---|---|
| Section 1 | Placeholder pipeline (structure only) |
| Section 2+ | Unit tests run automatically |
| Section 3+ | GUI tests run automatically |

---

##  License

This project is created for educational purposes as part of **IMY 772**.