# TestimonialsComponent

A reusable component that combines the TestimonialsSection, ClientWall, and an optional CTA section.

## Usage

```jsx
import TestimonialsComponent from '../components/sections/TestimonialsComponent';

// With CTA (default)
<TestimonialsComponent />

// Without CTA
<TestimonialsComponent showCTA={false} />
```

## Props

- `showCTA` (boolean, optional): Whether to show the final CTA section. Defaults to `true`.

## Features

- Displays the TestimonialsSection with client testimonials
- Shows the ClientWall with client logos
- Optional CTA section that encourages users to contact
- Fully responsive and animated
- Consistent with the ENGA design system

## Where to use

- Home page (with showCTA={false} to use custom CTA)
- About page
- Any page where you want to showcase testimonials
