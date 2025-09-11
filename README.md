Aditri Thakur Assignment A2
https://a2-aditri-thakur.onrender.com/
## Todo List Application
My application is a one-page to-do list tracker. A user can enter the title of their todo item, the due date, and the importance of the item. This information is then displayed in a table to the right of teh screeen.Additionally the server computes the days left til the assignment based on the current day. In the table, each item also has an edit and delete button if a user made a mistake or finished their assignment. Most on the website was styled using the main.js style sheet (with a few in-line override exceptions), an adobe color palette, and the google font: Sansation.

## Technical Achievements
- **Tech Achievement 1: Single-page app**: I craeted a single-page website using the html tags <form>, <input>, and <textarea> to create a to-do form where users could input their details. The table component is on the same page and useses the <table>, <thread>, <th>, <tr>, and <td> tags. The server calculates the days left before the due date and adds that information to the table. I also used the alert and error functions in the server and front-end to make sure users inputted all the details.
- **Tech Achievement 2: CRUD Functions**: I added edit and delete buttons to each row item in the to-do list to allow users functionality to make changes or complete to-dos. Additionally, when in edit-mode the user has the option to save or cancel their changes. Anytime anything is submitted, edited (then saved or canceled), or deleted, the server updates the stored data and my front-end javascript updates my table display.

### Design/Evaluation Achievements
- **Design Achievement 1: CSS Styling**: I styled the webpage using Element selectors (like body), ID selectors (like .main), and Class selectors (like #TodoForm). Most of my CSS is done in my main.css stylesheet. I do some inline css to overright any styling for specific components. I used a color palette created in Adobe and the google font Sansation as the base of my design. 
- **Evaluation Achievement 1**: 
1. Drinkwater
2. What problems did the user have with your design?
    - Did not like that items are listed sequentially from the datestamp that they are added 
    - Did not like that there were huge gaps between items
3. What comments did they make that surprised you?
    - She was suprised when she added another item it split the page.
    - Like the editing feature - thought it was clean.
4. What would you change about the interface based on their feedback?
    I would add an ordering system -- user can choose if they want to order of filter by date due, date created, or importance. I would also do a normal list scrolling list rather than dividing the area. 
- **Evaluation Achievement 2**: 
1. Kortus
2. What problems did the user have with your design?
    - Did not like that the importances were not color-coded.
    - Dis not like the order by creation date either.
3. What comments did they make that surprised you?
    - Liked the dividing of the page, but was concered about what would happen if a lot of to-dos.
4. What would you change about the interface based on their feedback?
    I would impelement color-coding the importance because thats a good visual fix. I would also add a filtering system.


