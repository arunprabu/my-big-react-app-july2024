

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
    7. Page Title should be updated 

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
    

