

Components
=======
  2 Types of Components 
  ---------------
    1. functional components (RECOMMENDED)
        * written with functions 
        1.1 Fn components with Named function [DONE]
        1.2 Fn Components with Anonymouns function [DONE]
        1.3 Fn Components with Arrow function [DONE] [RECOMMENDED]

    2. class components (NOT RECOMMENDED)

JSX
====
  * will look like HTML. But NOT
  * class should become className 
  * all elements must be either self-closed or separately-closed 
  * for attribute should be changed to htmlFor


Single Page App (SPA)
-----
  Characteristics of SPA 
  -----------------------
    1. Pages should NOT Refresh [DONE]
    2. URL should change [DONE]
    3. History should be maintained w/o page refresh  [DONE]
    4. Header and Footer should NOT be loaded again and again  [DONE]
    5. The section in b/w Header and Footer should show contextual updates [DONE]
    6. Active Menu should be set [TODO]
    7. Page Title should be updated [TODO]

    using react-router-dom 


=========
Routing in React
===========
  Step 0: Identify the menus of your app and the matching URLs
    Home                    /
    Netflix                 /netflix
    User Manager App        /user-manager
    Products                /products
    Todos                   /todos
    About                   /about
    Contact                 /contact-us

  Step 1: Setup the urls for the menus in MenuList component

  Step 2: create the necessary components for the pages

  Step 3: Configure the routes in App.tsx 

  Step 4: Stop the Page Refresh in MenuList 
    replace a href with Link to 
    

======
Core Concepts of React JS 
----
  1. Props [DONE]
      * objects 
      
  2. States [DONE]
  3. Events [DONE]
  4. Lists & Keys [DONE]
  5. Conditional Rendering 




Project Structure
====
  src/
    layouts/
      Header
      Footer
      MenuList
    components/
      shared/
        ....
        ....
      netflix 
        LatestShowList
        LatestShow 
        FeaturedShowList
        FeaturedShow
        RecommendedShowList
      user-manager/
        AddUser
        UserDetails 
    pages/
      HomePage 
      NetflixPage 
      UserManagerPage 
      AboutPage 

  


Sharing data between components / Cross component Communication
----
  1. Parent to Child component Communication [DONE]
      using props 

  2. Child to Parent component Communication
      using props with events and callback fn [TODO]

  3. Any to Any component Communication
      3.1 using context api of React JS (or) 
      3.2 using redux-toolkit (or) 
      3.3 using zustand (or some other alternatives of zustand/  redux-toolkit) [not part of our course]



Performance Tuning in ReactJS App
====
  1. get the exact from backend rest api 
  2. keep required amount of data only in component 
  3. never send unnecessary data to child comp 
  4. never receive all props in child comp. instead destructuring props required 
  5. use stable id as key in lists. not index 
  6. never have unnecessary tags. keep the tags minimal
  

