# Design Test

This is challenge to replicate a design. The programme is fully responsive on all devices and has functionality to expand each text box on click with additional text. 


# Installation
Run the following command to install the relevant Ruby gems:

    bundle install
 You can then run the programme locally by kickstarting the server with:
  

    rails s
    
# Navigating The Code
**Style**
 - All CSS is in the folder 'app/assets/stylesheets'.  
 - The styling for the main page can be found in '../stylesheets/pages/home.scss'
 - Styling for the cards and card layout in '../stylesheets/components/card.scss'
 - These are then imported into a single stylesheet

**Javascript**
- The functionality for the modal collapse and opening is in 'app/assets/javascript/components/modal.js'. 
- The function is then imported into a single index.js file and uses turbolinks to run 

# Design Considerations

 - To keep the layout perfectly laid out, I used grid positioning for
   the card layouts that move to a single column on mobile devices.
 - I've included two branches with different approaches for adding  text when the box expands. 
   - On the master, there's a conditional check to see if the text is the short version and then toggles the additional text on click.  
   - On the js-modal branch, the text is included in the html and the function toggles a display class if the user wanted to change the text in each modal. 

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/68198668/110201698-8053d200-7e5c-11eb-98da-ba6040873b98.gif)

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/68198668/110201838-0ec85380-7e5d-11eb-93a4-52f2e242024e.gif)
