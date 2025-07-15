# Thought Foundry

Thought Foundry is a personal knowledge base and digital garden built with [Eleventy](https://www.11ty.dev/). It's designed to be a place to cultivate and publish notes, book reviews, and articles on a variety of topics.

## Features

  * **Content Organization**: The site is structured into collections for "posts", "books", and "notes", making it easy to manage different types of content.
  * **Tagging System**: A robust tagging system allows for easy categorization and discovery of content. The system is case-insensitive and generates a list of all tags used across the site.
  * **Client-Side Search**: A vanilla JavaScript search implementation allows users to easily find articles by title or content.
  * **Table of Contents**: A Table of Contents is automatically generated for each post based on its headings, improving navigation for longer articles.
  * **SEO-Friendly Slugs**: The site uses the `pinyin` and `slugify` libraries to automatically generate clean, readable URLs from post titles, even those in Chinese.
  * **Automated Deployment**: The project includes a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages whenever changes are pushed to the `main` branch.
  * **Responsive Design**: The CSS is structured to ensure the layout is responsive and works well on different screen sizes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need to have [Node.js](https://nodejs.org/) (version 18 or higher is recommended) and npm installed on your machine.

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/austery/thought-foundry.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd thought-foundry
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Usage

### Development

To start the local development server with hot-reloading, run the following command. This will make the site available at `http://localhost:8080/`.

```bash
npx @11ty/eleventy --serve
```

### Production Build

To generate a production-ready build of the site, run the following command. The output will be generated in the `_site` directory.

```bash
npm run build
```

## Technologies Used

  * **[Eleventy](https://www.11ty.dev/)**: A simpler static site generator.
  * **[Nunjucks](https://mozilla.github.io/nunjucks/)**: The templating engine used for layouts.
  * **[Markdown](https://www.markdownguide.org/)**: For writing content.
  * **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: For client-side functionality like search and table of contents generation.
  * **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**: For styling the website.
  * **[GitHub Actions](https://github.com/features/actions)**: For continuous integration and deployment.
