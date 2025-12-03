# Drink Hyphy Website
# TEST

## Project Overview
This project is a **Single Page Application (SPA)** website for **Drink Hyphy**, a bar and beverage startup in Angeles City, Pampanga. The website is built with **React** and uses reusable components to ensure a clean, scalable, and maintainable codebase.  

The goal of this project is to provide a **better user experience** compared to Drink Hyphy’s current online presence on **Linktree** ([https://linktr.ee/drinkhyphy](https://linktr.ee/drinkhyphy)). Users can now easily access menus, location, and social media links without leaving the website.  

---

## Why a Full SPA Website?
Currently, Drink Hyphy uses Linktree as their main online presence. While functional, Linktree has several limitations:  

1. **Limited Information & Context**  
   - Only contains links (Menu, Location, Social Media).  
   - Users cannot learn about the brand story, mission, or team.  

2. **Menu Experience is Clunky**  
   - Clicking “Menu” redirects to Google Drive photos.  
   - No dynamic interaction, filtering, or clear pricing.  

3. **Location Details Are Minimal**  
   - Limited information without embedded maps or detailed directions.  

4. **Limited Branding & Design Control**  
   - Appearance is dictated by Linktree; difficult to reflect brand identity.  

5. **Poor SPA/Seamless Navigation**  
   - Every click leaves Linktree or third-party platforms.  
   - No smooth single-page experience.  

**Benefits of the New SPA Website:**  
- Fully interactive menu with sections, prices, and icons.  
- Integrated location page with embedded Google Maps.  
- Clear About Us page with brand story and social links.  
- SPA ensures no page reloads; smooth and cohesive navigation.  
- Full branding control and reusable React components.  

---

## Project Features
- **Home Page**  
  - Brand logo and title.  
  - Clicking the logo will navigate back to the Home page from any route.  
  - Interactive menu, location, and about buttons with hover animations.  
  - 3-dot share button for each section to copy/share links.  

- **Menu Page**  
  - Sections for Alcohol and Food & Beverages.  
  - Items with icons, prices, and descriptions.  
  - Collapsible sections for better user experience.  
  - Smooth hover effects and visually distinct text.  

- **About Us Page**  
  - Brand story and mission.  
  - Social media buttons: TikTok, Instagram (Bar & Cafe), Facebook.  
  - Consistent design with hover animations.  

- **Location Page**  
  - Full address with styled info box.  
  - Embedded Google Map for easy directions.  
  - Text is visible and readable over the background.  

---

## Routes
| Route | Description |
|-------|-------------|
| `/` | Home page with logo (clickable to go back to home), interactive buttons (Menu, Location, About Us), and share icons. |
| `/menu` | Menu page with Alcohol and Food & Beverages sections. Users can toggle sections to view items. |
| `/about` | About Us page with brand story, mission, and social media buttons. |
| `/location` | Location page with full address and embedded Google Map. |

---

## Tech Stack
- **React**: Front-end library for building reusable components.  
- **React Router**: SPA routing without page reloads.  
- **React Icons**: For icons like menu, location, social media, and share.  
- **CSS-in-JS / Inline Styling**: For flexible and quick styling.  

---

## Design Improvements
- Buttons and text hover animations match brand colors (`#ff6f61`).  
- Borders and boxes use semi-transparent overlays for better readability.  
- SPA ensures smooth navigation without reloads.  
- Responsive design for mobile and desktop.  
- Reusable components for buttons, headers, and cards.  

---

## References
- Drink Hyphy’s current online presence: [Linktree](https://linktr.ee/drinkhyphy)  
- Location map: Google Maps Embed  

---

## Author
- [Borje, Arnold Jr. B.]  
- [https://github.com/arnoldborje/DRINK-HYPHY]  