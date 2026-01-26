# Contributing to our documents

Thank you for contributing ✨
This document explains **how our documents are structured**, what the **Metadata** at the top of each document means, and **how to update it correctly** when you make changes.

No technical knowledge is required.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. How our documents are structured](#1-how-our-documents-are-structured)
- [2. What is Metadata?](#2-what-is-metadata)
- [3. Project Metadata](#3-project-metadata)
  - [Phase](#phase)
  - [Scope](#scope)
- [4. Document Metadata](#4-document-metadata)
  - [Document State](#document-state)
    - [How to update the State](#how-to-update-the-state)
  - [Document Version](#document-version)
    - [First number (X): changes in substance](#first-number-x-changes-in-substance)
    - [Second number (Y): changes in form](#second-number-y-changes-in-form)
  - [Examples](#examples)
- [5. When must the version be updated?](#5-when-must-the-version-be-updated)
- [6. Good practices for contributors](#6-good-practices-for-contributors)
- [7. Why this matters](#7-why-this-matters)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## 1. How our documents are structured

All our documents are written in **Markdown** and follow the same structure:

```markdown
---
Project:
  Phase: Bootstrap
  Scope: Global
Document:
  State: Draft
  Version: 1.0
---
# Title

Document content starts here…
```

The part between the `---` lines at the top is called **Metadata**.

👉 **Metadata describes the document itself**, not its content.
It helps everyone understand:

- where the document stands,
- whether it is finished or still being worked on,
- and how significant the latest changes are.

---

## 2. What is Metadata?

Metadata is a short block of information placed **at the very top of the document**.

It contains two sections:

- **Project** → information about the overall project
- **Document** → information about this specific document

You should **always keep this section up to date** when editing a document.

---

## 3. Project Metadata

```yaml
Project:
  Phase: Bootstrap
  Scope: Global
```

### Phase

**Phase** describes the current stage of the overall project.

- **Bootstrap**
  The project is being set up, structured, or defined.
  Documents may still change significantly.

> [!INFO]  
> Other scopes will appear later as the project evolves

---

### Scope

**Scope** describes **the area of the project the document relates to**.

A Scope can refer to:

- **The project as a whole** (founding documents, etc): `Global`.
- **A functional area** of the project: `Communication`, `Finance`, `Legal`.
- **A geographical area**: `Estonia`, `Portugal`, etc.

The Scope helps readers immediately understand **the context and focus** of a document.

> [!INFO]  
> Other scopes will appear later as the project evolves

---

## 4. Document Metadata

```yaml
Document:
  State: Draft
  Version: 1.0
```

This section is the most important one to update when contributing.

---

### Document State

**State** describes the current status of the document.

Possible values are:

- **Draft**
  The document is still being written or revised.
  Changes are expected.
- **Proposal**
  The document is considered complete enough to be discussed, reviewed, or approved.
- **Done**
  The document is finished and approved.
  It should not change unless a new version is intentionally prepared.

#### How to update the State

- New documents **always start as `Draft`**
- When a document is ready for review, change it to **`Proposal`**
- Once approved, change it to **`Done`**
- If a finished document needs changes later:
  - Change its State from **`Done` back to `Draft`**
  - Prepare a new version (see below)

---

### Document Version

**Version** is written as two numbers: **X.Y**
For example: `1.0`, `1.1`, `2.0`

These numbers explain **what kind of change was made**.

#### First number (X): changes in substance

The first number (**X**) increases when the **meaning or content** of the document changes.

Examples:

- New rules, decisions, or commitments
- A change in intent or interpretation
- Adding or removing important sections

👉 These are changes **in substance** (what the document says).

The first version always starts at **1**.

---

#### Second number (Y): changes in form

The second number (**Y**) increases when only the **form** changes.

Examples:

- Rewording sentences for clarity
- Correcting spelling or grammar
- Improving formatting or layout
- Reordering text without changing meaning

👉 These are changes **in form**, not in meaning.

The second number always starts at **0**.

---

### Examples

| Change made                    | New version |
| ------------------------------ | ----------- |
| First creation of the document | `1.0`       |
| Fixing typos or wording        | `1.1`       |
| Improving formatting only      | `1.2`       |
| Changing the meaning or rules  | `2.0`       |
| Major rewrite of content       | `3.0`       |

---

## 5. When must the version be updated?

You must update the version number whenever:

- A document is **created for the first time**
  → it starts as **Draft**, version **1.0**

- A document marked as **Done** is reopened as **Draft**
  → this means a **new version is being prepared**

As a general rule:

- **If meaning changes → increase X**
- **If only wording or presentation changes → increase Y**

---

## 6. Good practices for contributors

- Always check the **Metadata before and after** editing a document
- Keep the Metadata **honest and accurate**
- When in doubt about whether a change affects meaning:
  - assume it does, and increase **X**
- If you are unsure, ask for clarification before publishing

---

## 7. Why this matters

This system helps everyone:

- understand whether a document is stable or evolving,
- see how important a change is at a glance,
- collaborate transparently and respectfully.

Thank you for helping keep our documents clear, consistent, and trustworthy 💙
