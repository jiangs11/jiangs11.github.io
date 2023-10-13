<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/noworneverev/react-vscode-portfolio">
    <img src="./src/static/favicon.gif" alt="Logo" width="150" >
  </a>

<h3 align="center">react-vscode-portfolio</h3>

  <p align="center">
    A vscode inspired portfolio project
    <br />
    <a href="https://github.com/jiangs11/jiangs11.github.io/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jiangs11/jiangs11.github.io">View Demo</a>
    ·
    <a href="https://github.com/jiangs11/jiangs11.github.io/issues">Report Bug</a>
    ·
    <a href="https://github.com/jiangs11/jiangs11.github.io/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>        
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://noworneverev.github.io/)

The project is inspired by [Visual Studio Code](https://github.com/microsoft/vscode) and [caglarturali.github.io](https://github.com/caglarturali/caglarturali.github.io). The pages of the portfolio are powered by `markdown`, which make them easy to modify or add your own contents.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [React.js](https://reactjs.org/)
-   [Material UI](https://github.com/mui/material-ui)
-   [react-markdown](https://github.com/remarkjs/react-markdown)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/jiangs11/jiangs11.github.io.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Add your markdown pages in `public/pages`
4. Add your routes in `src/app/pages/page.ts`, make sure the names of pages are consistent with markdown files.
    ```ts
    export const pages = [
        { index: 0, name: "overview.md", route: "/overview" },
        { index: 1, name: "skills.md", route: "/skills" },
        { index: 2, name: "experience.md", route: "/experience" },
        { index: 3, name: "education.md", route: "/education" },
        { index: 4, name: "projects.md", route: "/projects" },
        { index: 5, name: "certificates.md", route: "/certificates" },
        { index: 6, name: "accomplishments.md", route: "/accomplishments" },
    ];
    ```
5. Add your social links in `src/app/pages/link.tsx`, which will appear in both sidebar and homepage.
    ```ts
    export const links = [
        {
            index: 0,
            title: "Find me on Github",
            href: "https://github.com/jiangs11",
            icon: <FaGithub />,
        },
    ];
    ```
6. Runs the app in the development mode
    ```sh
    npm start
    ```
7. If you would like to deploy your own portfolio,

    - modify homepage property in `package.json`

    ```
    "homepage": "https://{username}.github.io/{repo-name}"
    ```

    > \* For a [project site](https://pages.github.com/#project-site), that's the format. For a [user site](https://pages.github.com/#user-site), the format is: `https://{username}.github.io`. You can read more about the `homepage` property in the ["GitHub Pages" section](https://create-react-app.dev/docs/deployment/#github-pages) of the `create-react-app` documentation.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Features

-   Powered by markdown
-   Dark mode and light mode available
-   Closable tabs
-   Collapsible explorer
-   Responsive web design
-   Google Analytics supported
-   Auto-deploy to gh-pages with github actions ready

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Steven Jiang - [Personal Portfolio](https://jiangs11.github.io/) - jiangsteven99@gmail.com

Project Link: [https://github.com/jiangs11/jiangs11.github.io](https://github.com/jiangs11/jiangs11.github.io)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [Img Shields](https://shields.io)
-   [GitHub Pages](https://pages.github.com)
-   [React Icons](https://react-icons.github.io/react-icons/search)
-   [caglarturali.github.io](https://github.com/caglarturali/caglarturali.github.io)

<p align="right">(<a href="#top">back to top</a>)</p>
