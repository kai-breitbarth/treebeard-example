
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Django Treebeard Table Example</h3>

  <p align="center">
    A little example how to use <a href="https://github.com/django-treebeard/django-treebeard">django-treebeard</a> and show a tree structure in a table
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](static/images/screenshot.png)

I was looking for a good example how to create a tree view in a table.
I couldn't find any. There are examples how to show it in the admin area, but I missed an easy example how to show it in a normal template.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This example is build with

* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

You should have Python 3 installed

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo

    ```sh
    git clone https://github.com/kai-breitbarth/treebeard-example.git
    cd treebeard-example
    ```

2. create an environment (optional)

    ```sh
    pyenv local 3.11
    python -m venv .venv
    ```

3. install the pip packages

    ```sh
    pip install -r requirements.txt
    ```

4. setup and start

    ```sh
    python manage.py migrate
    python manage.py createsuperuser
    python manage.py loaddata seed/tree.json
    python manage.py runserver
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Open [localhost](http://localhost:8000/) to see the table

Open the [admin](http://localhost:8000/) area to edit the categories


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kai-breitbarth/treebeard-example.svg?style=for-the-badge
[contributors-url]: https://github.com/kai-breitbarth/treebeard-example/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kai-breitbarth/treebeard-example.svg?style=for-the-badge
[forks-url]: https://github.com/kai-breitbarth/treebeard-example/network/members
[stars-shield]: https://img.shields.io/github/stars/kai-breitbarth/treebeard-example.svg?style=for-the-badge
[stars-url]: https://github.com/kai-breitbarth/treebeard-example/stargazers
[issues-shield]: https://img.shields.io/github/issues/kai-breitbarth/treebeard-example.svg?style=for-the-badge
[issues-url]: https://github.com/kai-breitbarth/treebeard-example/issues
[license-shield]: https://img.shields.io/github/license/kai-breitbarth/treebeard-example.svg?style=for-the-badge
[license-url]: https://github.com/kai-breitbarth/treebeard-example/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kai-breitbarth-a6753996/
[product-screenshot]: static/images/screenshot.png
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 