# DESIGN_SYSTEM.md — Punto Destino

## Identidad de marca

**Nombre:** Punto Destino
**Tagline:** CONECTAMOS TU DESTINO *(siempre en mayúsculas, tracking amplio)*
**Personalidad:** Dinámico · Confiable · Tecnológico · Premium
**Mood:** Oscuro, ardiente, cinematográfico — como una ciudad de noche vista desde una moto

---

## Paleta de colores

### Primarios — gradiente de fuego

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-fire` | `#FF1A00` | Acento más intenso, bordes de error |
| `--color-red-coral` | `#FF3B1F` | Inicio del gradiente principal |
| `--color-orange` | `#FF5B18` | Naranja primario — CTAs, íconos activos |
| `--color-orange-mid` | `#FF7A20` | Naranja medio — degradados |
| `--color-amber` | `#FFAB30` | Ámbar dorado — highlights, tagline, estrellas |
| `--color-gold` | `#FFD060` | Dorado suave — detalles decorativos |

### Fondos oscuros — jerarquía de profundidad

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-bg-deep` | `#0D0D0D` | Fondo base de toda la página |
| `--color-bg-section` | `#120800` | Secciones alternas (features, how-it-works) |
| `--color-bg-warm` | `#1A0A00` | Nivel intermedio — overlays sutiles |
| `--color-bg-card` | `#1E1008` | Fondo de cards y componentes |
| `--color-bg-footer` | `#0A0400` | Footer — más oscuro que el body |

### Texto

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-text-primary` | `#FFFFFF` | Titulares, body principal |
| `--color-text-secondary` | `#C8C4BC` | Subtítulos, descripciones |
| `--color-text-muted` | `#888480` | Metadata, notas legales, placeholders |
| `--color-text-accent` | `#FFAB30` | Tagline, labels de categoría, precio destacado |

### Bordes

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-border-subtle` | `rgba(255, 91, 24, 0.15)` | Borde en reposo de cards |
| `--color-border-medium` | `rgba(255, 91, 24, 0.30)` | Borde hover de cards |
| `--color-border-glow` | `rgba(255, 171, 48, 0.50)` | Borde activo / card destacada |
| `--color-border-dark` | `rgba(255, 91, 24, 0.10)` | Separadores sutiles (footer, navbar) |

---

## Gradientes

```css
/* Gradiente principal de marca — diagonal */
--gradient-brand: linear-gradient(135deg, #FF1A00 0%, #FF5B18 45%, #FFAB30 100%);

/* Gradiente horizontal — barras, líneas conectoras, tickers */
--gradient-brand-h: linear-gradient(90deg, #FF1A00 0%, #FF5B18 50%, #FFAB30 100%);

/* Gradiente de fondo card — muy sutil */
--gradient-card: linear-gradient(135deg, rgba(255,91,24,0.08) 0%, rgba(255,171,48,0.04) 100%);

/* Ambient glow radial — detrás de elementos hero */
--gradient-glow: radial-gradient(ellipse at center, rgba(255,91,24,0.25) 0%, transparent 70%);

/* Fade horizontal — para ocultar bordes del ticker */
--gradient-fade-l: linear-gradient(90deg, #0D0D0D 0%, transparent 100%);
--gradient-fade-r: linear-gradient(270deg, #0D0D0D 0%, transparent 100%);
```

**Regla crítica del gradiente:** siempre de rojo/oscuro → dorado/claro. Nunca al revés.

---

## Sombras y glows

```css
--shadow-glow-sm: 0 0 20px rgba(255, 91, 24, 0.25);   /* Cards en hover */
--shadow-glow-md: 0 0 40px rgba(255, 91, 24, 0.35);   /* Card destacada Pricing */
--shadow-glow-lg: 0 0 80px rgba(255, 91, 24, 0.20);   /* Hero, FinalCTA */
--shadow-card:    0 4px 24px rgba(0, 0, 0, 0.40);      /* Elevación de cards */
```

---

## Tipografía

### Fuentes

| Rol | Familia | Pesos | Variable CSS |
|-----|---------|-------|-------------|
| Display / Headlines | Barlow Condensed | 700, 900 | `--font-display` |
| Body / UI | Barlow | 400, 500, 600, 700 | `--font-body` |

### Escala tipográfica

| Elemento | Font | Weight | Size (mobile → desktop) | Tracking |
|----------|------|--------|--------------------------|---------|
| H1 Hero | display | 900 | `text-5xl → text-8xl` | `-0.02em` |
| H2 Sección | display | 900 | `text-4xl → text-6xl` | `-0.01em` |
| H3 Card | display | 700 | `text-2xl → text-3xl` | `0` |
| Subtítulo | body | 400 | `text-lg → text-xl` | `0` |
| Body | body | 400 | `text-sm → text-base` | `0` |
| Label / Tag | body | 600 | `text-xs` | `0.12em` |
| Tagline | body | 600 | `text-xs → text-sm` | `0.18em` |

**Regla:** H1 y H2 siempre en `uppercase`. Tags y tagline siempre en `uppercase`. Body nunca en uppercase.

---

## globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@700;900&display=swap');

:root {
  /* Primarios */
  --color-fire:        #FF1A00;
  --color-red-coral:   #FF3B1F;
  --color-orange:      #FF5B18;
  --color-orange-mid:  #FF7A20;
  --color-amber:       #FFAB30;
  --color-gold:        #FFD060;

  /* Fondos */
  --color-bg-deep:     #0D0D0D;
  --color-bg-section:  #120800;
  --color-bg-warm:     #1A0A00;
  --color-bg-card:     #1E1008;
  --color-bg-footer:   #0A0400;

  /* Texto */
  --color-text-primary:   #FFFFFF;
  --color-text-secondary: #C8C4BC;
  --color-text-muted:     #888480;
  --color-text-accent:    #FFAB30;

  /* Bordes */
  --color-border-subtle:  rgba(255, 91, 24, 0.15);
  --color-border-medium:  rgba(255, 91, 24, 0.30);
  --color-border-glow:    rgba(255, 171, 48, 0.50);
  --color-border-dark:    rgba(255, 91, 24, 0.10);

  /* Gradientes */
  --gradient-brand:    linear-gradient(135deg, #FF1A00 0%, #FF5B18 45%, #FFAB30 100%);
  --gradient-brand-h:  linear-gradient(90deg,  #FF1A00 0%, #FF5B18 50%, #FFAB30 100%);
  --gradient-card:     linear-gradient(135deg, rgba(255,91,24,0.08) 0%, rgba(255,171,48,0.04) 100%);
  --gradient-glow:     radial-gradient(ellipse at center, rgba(255,91,24,0.25) 0%, transparent 70%);
  --gradient-fade-l:   linear-gradient(90deg, #0D0D0D 0%, transparent 100%);
  --gradient-fade-r:   linear-gradient(270deg, #0D0D0D 0%, transparent 100%);

  /* Sombras */
  --shadow-glow-sm:    0 0 20px rgba(255, 91, 24, 0.25);
  --shadow-glow-md:    0 0 40px rgba(255, 91, 24, 0.35);
  --shadow-glow-lg:    0 0 80px rgba(255, 91, 24, 0.20);
  --shadow-card:       0 4px 24px rgba(0, 0, 0, 0.40);

  /* Tipografía */
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body:    'Barlow', sans-serif;

  /* Layout */
  --container-max:  1200px;
  --section-pad-y:  5rem;
}

/* Reset base */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background-color: var(--color-bg-deep);
  color: var(--color-text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## tailwind.config.ts

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      colors: {
        fire:        '#FF1A00',
        'red-coral': '#FF3B1F',
        orange:      '#FF5B18',
        'orange-mid':'#FF7A20',
        amber:       '#FFAB30',
        gold:        '#FFD060',
        'bg-deep':    '#0D0D0D',
        'bg-section': '#120800',
        'bg-warm':    '#1A0A00',
        'bg-card':    '#1E1008',
        'bg-footer':  '#0A0400',
      },
      backgroundImage: {
        'brand-gradient':   'linear-gradient(135deg, #FF1A00 0%, #FF5B18 45%, #FFAB30 100%)',
        'brand-gradient-h': 'linear-gradient(90deg, #FF1A00 0%, #FF5B18 50%, #FFAB30 100%)',
        'card-gradient':    'linear-gradient(135deg, rgba(255,91,24,0.08) 0%, rgba(255,171,48,0.04) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(255, 91, 24, 0.25)',
        'glow-md': '0 0 40px rgba(255, 91, 24, 0.35)',
        'glow-lg': '0 0 80px rgba(255, 91, 24, 0.20)',
        'card':    '0 4px 24px rgba(0, 0, 0, 0.40)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
export default config
```

---

## Componentes UI base

### Button.tsx

```tsx
// Props
interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

// Estilos por variante
const variants = {
  primary: `
    bg-brand-gradient text-white font-body font-bold uppercase tracking-wide
    shadow-glow-sm hover:shadow-glow-md
    transition-all duration-200
  `,
  outline: `
    border border-orange/50 text-orange bg-transparent font-body font-bold uppercase tracking-wide
    hover:bg-orange/10 hover:border-orange/80
    transition-all duration-200
  `,
  ghost: `
    text-[--color-text-muted] font-body font-semibold uppercase tracking-wide
    hover:text-white
    transition-colors duration-200
  `,
}

// Estilos por tamaño
const sizes = {
  sm: 'py-2 px-5 text-sm rounded-full',
  md: 'py-3 px-8 text-base rounded-full',
  lg: 'py-4 px-10 text-lg rounded-full',
}

// Comportamiento Framer Motion
// whileHover={{ scale: 1.03 }}
// whileTap={{ scale: 0.97 }}
// transition={{ type: 'spring', stiffness: 400, damping: 17 }}
```

### Badge.tsx

```tsx
// Pequeña etiqueta de categoría sobre títulos de sección
// Fondo: rgba(255, 91, 24, 0.15)
// Texto: #FF5B18
// Border: 1px solid rgba(255, 91, 24, 0.30)
// Font: font-body text-xs font-semibold uppercase tracking-[0.12em]
// Padding: py-1 px-3
// Border-radius: 9999px (pill)
// Uso: <Badge>Características</Badge>
```

### SectionWrapper.tsx

```tsx
// Wrapper estándar para todas las secciones de la landing
// Props: id, bg ('default' | 'alt' | 'glow'), className, children

// bg variants:
//   default → bg-bg-deep
//   alt     → bg-bg-section
//   glow    → bg-bg-deep + pseudo-elemento con --gradient-glow centrado

// Siempre incluye:
//   <section id={id} className="relative overflow-hidden {bgStyle} {className}">
//     <div className="max-w-container mx-auto px-6 py-20">
//       {children}
//     </div>
//   </section>
```

---

## Reglas de diseño — ✅ Siempre / ❌ Nunca

### ✅ Siempre
- Fondo oscuro en toda la página. La única excepción posible es un card de pricing en modo "claro" como contraste visual.
- El gradiente de marca **siempre** de rojo → dorado (135° o 90°).
- Cards con `bg-bg-card`, borde `border-subtle`, hover `border-medium` + `shadow-glow-sm`.
- Botones primarios con el gradiente de marca completo + efecto glow.
- Tagline en `uppercase`, `tracking-widest`, color `amber`.
- Ambient glow (`--gradient-glow`) detrás del contenido principal en Hero y FinalCTA.
- Hover states visibles y satisfactorios en **todos** los elementos interactivos.
- Espaciado generoso: `py-20` por sección, `gap-8` mínimo en grids.
- Scroll reveal animado en cada sección con Framer Motion.

### ❌ Nunca
- Fondos blancos o grises claros como base.
- Fuentes `Inter`, `Roboto`, `Arial` o del sistema.
- Invertir el gradiente (dorado → rojo está prohibido).
- Usar más de 2 colores del gradiente en elementos pequeños (badges, íconos tiny).
- Tagline en minúsculas.
- Cards sin estado hover diferenciado.
- `border-radius` menor a `8px` en cards, ni mayor a `9999px` salvo botones y badges.
- Animaciones sin `viewport={{ once: true }}` — nunca repetir al hacer scroll up.
- Colores fuera de la paleta definida en este documento.
