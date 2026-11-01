---
name: Azhaanul Haque Farooqui Portfolio
description: Refined Light — a warm paper and forest green engineering portfolio.
colors:
  paper: "#f5f2e9"
  surface: "#eae7dc"
  ink: "#222820"
  muted: "#5e665b"
  line: "#d4d8ce"
  green: "#315545"
  deep: "#1e3b32"
  lime: "#d9ec9c"
typography:
  display:
    fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "clamp(2.6rem, 4.8vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "clamp(2.1rem, 3.4vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "clamp(1.5rem, 2.3vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "1.0625rem"
    lineHeight: 1.7
  label:
    fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "0.8125rem"
  mono:
    fontFamily: '"Cascadia Code", Consolas, monospace'
    fontSize: "0.8125rem"
rounded:
  square: "0px"
  plate: "2px"
spacing:
  small: "12px"
  medium: "24px"
  large: "32px"
  section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "#fff"
    rounded: "{rounded.square}"
    padding: "14px 20px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  text-link:
    textColor: "{colors.ink}"
  architecture-plate:
    backgroundColor: "{colors.deep}"
    textColor: "#f5f8f3"
    rounded: "{rounded.plate}"
---

# Design System: Azhaanul Haque Farooqui Portfolio

## Overview

**Creative North Star: "Refined Light"**

Warm paper, forest green and clear system typography give the portfolio a calm, readable character. Numbered project rows, conventional navigation and case-study reading layouts keep attention on the engineering work. A dark architecture diagram provides a focused technical contrast within the light pages.

The system font stack is an intentional approved choice; no downloaded font dependency is required. This document describes the implemented system in `src/styles/portfolio.css` and its current React components.

**Key Characteristics:**

- Warm neutral pages with restrained green accents.
- Flat sections and ruled project rows.
- Readable body text and visible metadata.
- A contrasting, interactive architecture plate.

## Colors

The palette combines warm neutrals with a muted forest accent; frontmatter values are normative.

### Primary

- **Forest green** (`green`): primary actions, technology lists, link hover and focus outlines.
- **Deep forest** (`deep`): architecture background and skip-link surface.
- **Light lime** (`lime`): architecture selection, diagram accents and text selection.

### Neutral

- **Warm paper** (`paper`): page background.
- **Warm surface** (`surface`): engineering-practice band and climate workflow panel.
- **Dark ink** (`ink`): headings, body text and primary-action hover.
- **Muted olive grey** (`muted`): supporting text and metadata.
- **Pale divider** (`line`): section boundaries, project rules and fact rows.

## Typography

Use the system sans stack for headings, prose, navigation and metadata. The system monospace stack distinguishes project numbers, endpoint text and protocol labels. Headings use medium weight and tight tracking; paragraphs use generous line height.

- **Display:** the frontmatter display role describes the home heading. Case-study headings use `clamp(2.5rem, 5.4vw, 5rem)` with line height (1.05).
- **Headline and title:** section headings and project names use the corresponding frontmatter roles. Case-study section headings use `clamp(1.8rem, 2.7vw, 2.5rem)`.
- **Body:** standard prose uses the body role; project summaries use (1rem). Case-study prose is limited to (68ch). Mobile body and case prose reduce to (1rem) at the small breakpoint.
- **Metadata:** facts, statuses, diagram labels and technology lists use the label size; navigation and text actions use (0.875rem). Keep these legible rather than treating them as decorative microtype.

## Layout

The centered container is capped at (1280px), with total horizontal subtraction of (112px) on desktop, (64px) at (1100px), and (40px) at (600px). Standard ruled sections use the section spacing token; major bands have their own observed spacing.

Desktop project rows use three columns: index (42px), title (1fr), description (1.05fr), with gaps (26px). At (800px), descriptions move below titles; at (600px), all content stacks. Practice and about sections change from two columns to one at (800px).

Case studies pair a sticky contents column (240px) with the reading column, narrowing the index to (180px) at (1100px). At (800px), contents become a wrapping row above the article. Architecture lanes stay side by side, sharing aligned node rows and one persistence region. Allow metadata, controls and long text to wrap without horizontal overflow.

## Elevation & Depth

The implementation uses no box shadows. Background changes, thin dividers and the dark architecture surface establish depth. Hover changes color or underline; the primary action transitions its background over (160ms ease). Smooth scrolling and transitions are disabled under reduced-motion preferences.

## Shapes

Use square corners for actions, rows and workflow surfaces. The architecture plate has a nearly square corner using the plate radius. Thin borders define nodes and section boundaries. Small circular location and status markers and the database cylinder are purposeful exceptions.

## Components

### Actions

Primary links are solid forest rectangles with white text, a thin matching border, an arrow and a minimum height (48px). Hover uses ink. Secondary actions are underlined text links with an arrow and minimum height (44px); hover changes green and thickens the underline.

### Navigation

Desktop navigation is a right-aligned, wrapping text row with no filled active pill. At (600px), a Menu/Close button reveals the wrapping navigation below a divider. Escape closes the menu and returns focus to its toggle. Preserve the skip link and visible keyboard focus outline (2px), offset (5px).

### Project rows and metadata

Use numbered, ruled articles with a title, category, written status, summary, slash-separated technology list and case-study link where available. Status dots accompany text. Technologies are plain text rather than filled chips. Planned work occupies its own clearly labeled section.

### Case studies

Use breadcrumbs, a large title and summary, ruled facts, a technology line, contents navigation and restrained reading sections. The climate overview is a flat tonal panel with a three-column workflow that stacks at (800px).

### Architecture plate

Use the deep background, light text, outlined nodes and fine connectors. Two application lanes converge on one shared persistence node. Inspector buttons use a lime underline and text when pressed; selected nodes receive a lime outline. Keep the written annotation and expandable system description alongside the visual diagram. Focus changes to lime within this surface; forced-colors mode retains visible borders and selection outlines.

## Do's and Don'ts

### Do:

- **Do** preserve the warm paper and forest palette across new screens.
- **Do** retain the approved system font stacks and readable metadata.
- **Do** use flat, ruled layouts and preserve responsive reading order.
- **Do** provide visible keyboard focus and respect reduced motion.

### Don't:

- **Don't** add a font dependency to recreate the approved typography.
- **Don't** replace numbered project rows with generic elevated cards.
- **Don't** reduce status, facts or diagram labels to tiny decorative text.
- **Don't** communicate diagram selection or project status through color alone.
