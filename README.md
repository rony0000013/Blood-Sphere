# InterHacktive-Blood-Sphere
<a id="top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://github.com/Koustavjr/Blood-Sphere/blob/master/Frontend/src/Images/INTERHACKTIVE.jpg" height=250px width=250px>
    <img src="https://github.com/Koustavjr/Blood-Sphere/blob/master/Frontend/src/Images/BLOODSPHERE-01.jpeg" alt="Logo" width="270" height="270">
  </a>
   
</div>
<a href="https://youtu.be/GIesmWSPkQM?si=URWYIPF2jeZdHIcz"> Watch Demo</a>
<!-- TABLE OF CONTENTS -->
<details>
  <Summary> Table of Contents  </Summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
         <ul>
        <li><a href="#inspiration">Inspiration</a></li>
      </ul>
      <ul>
        <li><a href="#use-case">Use Case</a></li>
      </ul>
       <ul>
        <li><a href="#what-problem-does-the-project-solve">What Problem does the Project Solve?</a></li>
      </ul>
      <ul>
        <li><a href="#overview">Overview</a></li>
      </ul>
      <ul>
        <li><a href="#challenges-we-faced">Challenges We Faced</a></li>
      </ul>
      <ul>
        <li><a href="#future-goals">Future Goals</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#how-to-use">How To Use</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>
  <!-- ABOUT THE PROJECT -->
  
  # 🩸🩸About The Project 🩸🩸



![UI/UX](https://github.com/Koustavjr/Blood-Sphere/blob/master/Frontend/src/Images/photo_2023-08-28_17-44-40.jpg)

### 💭Inspiration

• Unawareness of compatible blood availability nearby during emergency: People in need of blood during accidents/ emergency situations tend to rush to blood banks that are far away, potentially risking their life, assuming that there are no blood banks nearby. <br>

• Not knowing where to donate blood: Other than occasional blood donation campaigns, people are often unaware about the fact that the local hospitals run of certain blood types wherein potential blood donors can help them out.
&nbsp;&nbsp;&nbsp;&nbsp;

### 🎯Use Case 
Blood Donation and Searching during contingency
Imagine being in a critical situation where someone in need requires an urgent blood transfusion. Instead of panicking and rushing to distant blood banks, people can open our blood donation and searching website and try our ‘BloodSphere Bot’. With just a few clicks, you can easily find nearby blood banks/ hospitals with the compatible blood type. Our platform with its user-friendly interface, ensures you're always aware of compatible blood availability during emergencies, saving precious time and potentially saving lives.

### 💡What problem does the project solve?
•  Time constraints: In critical situations, people may waste valuable time searching for blood sources, which can delay life-saving treatment. <br>
•  Effective communication: Traditional ways to find blood donors can be time-consuming and involve long phone calls and large networks, which can slow down the process of getting the blood type you need. <br>
•  Different distribution of blood types: Lack of a centralized system can lead to mismatched blood types which can be dangerous or even fatal. <br>
•  Geographic constraints: Patients may not know where the closest blood bank is located, which can lead to wasted travel to remote areas. <br>
•  Low donor turnout: A lack of visibility and convenient access to donation centres can contribute to low donor turnout and insufficient blood supply.


### 🙌Overview 
•	On the landing page, see the buttons ‘Search for Blood’ and ‘Donate Blood’ respectively.

•	Clicking on the button will take you to our Bot – ‘BloodSphere Bot’

•	Start interacting with the bot through commands such as ‘/start’, ‘/get’ and ‘/donate’.

•	Enter your respective PIN code to get location and details of all the nearby blood banks and hospitals.


### 💀Challenges we Faced
•	Getting a free API to implement the bot was a heavy task.

•	Getting PIN code for all the nearby blood banks and hospitals in our database was a difficult task for us.

•	 We couldn’t find any extensive live database that could be implemented in our database.

•	The bot was to be implemented using WhatsApp API from Twilio but META makes it mandatory to have a Facebook page and takes about 3 weeks for verification, which was not feasible for us.


 
### 🔮Future Goals:
• For this project, as we couldn't get an extensive dataset, Our Future plan is to take some aid from the government to get access to some live data covering the availability of the various blood types across the country.

• Optimisation and minor bug fixes.



<p align="right"><a href="#read<img width="191" alt="an_logo_light_temp" src="https://user-images.githubusercontent.com/63441472/190889937-afb28215-5bb5-4115-83d2-f7afb73ef8f8.png">
</p>
<p align="right">(<a href="#top">back to top</a>)</p>

### 💻Built With


- <img src = "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" style="margin-top: 40px" height=30px width=30px > *React*- For developing the Front-end UI <br> 
- <img src = "https://github.com/Koustavjr/Blood-Sphere/blob/master/Frontend/src/Images/tailwind-removebg-preview.png" height=40px width=40px>*Tailwind Css and Daisy UI*- For designing the UI  <br>

- <img src = "https://juststickers.in/wp-content/uploads/2019/01/webpack-logo.png" height=40px width=40px> *WebPack* - Used to bundle the JavaScript packages  <br>
- <img src = "https://th.bing.com/th/id/OIP.wF-2BeX_-oRQVMGVyQxfowHaEc?pid=ImgDet&rs=1](https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" height=40px width=40px >*Bootstrap*- Used for Designing the front-end <br>
- <img src = "https://cdn.freebiesupply.com/logos/large/2x/auth0-logo-png-transparent.png" height=40px width=40px>*Auth0*- Used For making the sign in/Login handler  <br>
- <img src = "https://th.bing.com/th/id/R.4227717661d4e253127c591194bf6fe9?rik=JNbva6iP8QTsXw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fpython-logo-transparent%2fpython-logo-transparent-5.jpg&ehk=fd687R1W1S%2fYQ9PAACxGKzTy%2bLNdngxem8mtMtcFzBg%3d&risl=&pid=ImgRaw&r=0" height=40px width=40px> *Python* - Used for developing the backend and connecting the telegramBotApi for handling the messages  <br>
- <img src="https://scrapingant.com/blog/img/blog/beautifulsoup-logo.png" height=50px width=50px> *BeautifulSoup4*- used for scraping data from [Website](https://www.eraktkosh.in/BLDAHIMS/bloodbank/transactions/bbpublicindex.html)  
- <img src="https://th.bing.com/th/id/OIP.710tCvb0eHNtcf8DbFOTdwHaHa?pid=ImgDet&rs=1" height=40px width=40px>API used - <br>
            1. Google Map API  <br>
            2. Zip Code Base API <br>
            3. Telegram Bot API <br>
- *Email JS* - Use for sending email to user client side technology 
- <img src="https://th.bing.com/th/id/OIP.P5VJJoua7vc00-2-LBGi8QHaHa?pid=ImgDet&rs=1" height=40px width=40px> Deployment is done in FLy.io

<p align="right">(<a href="#top">back to top</a>)</p>


## Tracks Used
1. Best Project Workflow
2. Best Implementation Of UI/UX
<!-- GETTING STARTED -->
## Getting Started
For setting up your project locally, follow these simple steps.
### Prerequisites
You must have followings installed  in your system , If you dont we got you covered  
1. [Install NPM](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
2. [Install Pip](https://pip.pypa.io/en/stable/cli/pip_install/)
3. [Python Download](https://www.python.org/downloads/)
## Installation
1. clone repo
 ```
  git clone : https://github.com/Soumyajit2825/Blood-Sphere.git
   ```
  **_Front-end Installation_**
1. Navigate to frontend folder
  ```
cd Frontend
```
2. Install necessary Libraries 
```
npm i
```
3. To run fronted on local server

```
npm start
```
**_Backend Installation_**
If you do not want to deploy the bot, bot is already deployed: https://t.me/blood_sphere_bot
1. Navigate to Backend Folder
```
$ cd Backend
```
2. Install required libraries
```
$ pip instsall -r requirements.txt
```
3. Add your zipcodebase API key and telegram bot API key
4. To run script
```
$ python app.py
```

 

[Telegram Bot](https://t.me/blood_sphere_bot) or paste this user name in telegram Search: @blood_sphere_bot
 
    

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES 
## Usage
<div align="center">
<img src="https://media2.giphy.com/media/UYpelo7WbjZQg0dDQY/200.gif" width="500" height="200" />
</div>
<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- How to  Use -->
## How To Use
&nbsp; 
- [x] Open BloodSpehere Website
- [x] Login With Your Credentials
- [x] Click on Search/Donate
- [x] Interact with the bot to meet your purpose
     ### Commands To Interact
- [x] /start - to start interacting with the bot
- [x] /get - to search blood groups
- [x] /donate - to find nearby blood donation camps
- [ ] Live data fetch and update(Future plan)
### WorkFLow
![](https://github.com/Koustavjr/Blood-Sphere/blob/master/Frontend/src/Images/workflow.jpg)
      

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing


If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "improvement".
Don't forget to ⭐ this project!! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/Feature1`)
3. Commit your Changes (`git commit -m 'Add Feature 1'`)
4. Push to the Branch (`git push origin feature/Feature1`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Contributors

<br>
<div>
<h1 align="center">
 <b>Made with ❤️ by team Semicolon
<h1>
<a href="https://github.com/Soumyajit2825/Blood-Sphere/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Soumyajit2825/Blood-Sphere" />
</a>
</div>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&logo=nodedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Express]: https://img.shields.io/badge/Express-35495E?style=for-the-badge&logo=express&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

