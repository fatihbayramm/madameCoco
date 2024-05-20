

# MADAME COCO PROJECT
This project is a frontend project made for a student to try to improve himself. HTML, CSS, JavaScript, EJS, Node.js languages were used.

# Why was this project made ?
First of all, I did this project to improve myself in the frontend field and bring it to the next level, and I think it was successful. This project could be done much more easily with React, but I am not familiar with React yet. So I decided to do it in pure JavaScript and got to work. I communicated with Madame Coco's backend through a proxy I set up with Node.js. By pulling the data from the backend, I put the data into the frontend architecture I created and this project emerged. I'm proud of my project.

# Architectural structure
The architectural structure of this project is based on a single-page HTML structure. Common views are used on pages. For example, on the product list page, the header and footer sections are written in separate HTML files and imported to the list page. The page was then arranged according to the incoming data. The code of each page in the project is divided into sections. HTML, CSS, JavaScript codes have been turned into templates. In this way, the project has become more organized. The codes of the relevant page can be found more easily, thus avoiding code complexity. The established architectural structure is clearly seen in the directories. As for the backend, a proxy was written with Node.js to overcome the CORS error for communication and communication with the backend was made through it. Additionally, handling the requests is also done by Node.js. I placed the incoming data into my page using ejs in HTML. The project includes listing products, changing the appearance of the list page, filtering products by many types, product detail page, logging in and out. A grid structure is used to place the products on the list page.

# Detailed information about the project

To give more detailed information about the project:

As I said before, header and footer templates are placed on the list page. There is a classic container in the body section. As can be seen in the navbar section, but they are not working buttons. In the section below the navbar, the login and registration buttons work and direct you to the page you want.Then, when you filter the products as you wish according to color, size, size, gender, material and price filters, the products that match those filters are displayed on the page according to the filter made. When you click clear all filters, all filters are removed and the page returns to its previous state. Additionally, if you want to remove any of the filters, you can remove the filter you want by pressing on the bubbles that appear in that section when you make a filter. You can also filter using the advanced sorting button. You can filter by increasing by price, decreasing by price, new arrivals and bestsellers. Then, under that section, there are buttons with which you can change the appearance of the products. You can see the products in different sizes and orders, it is up to your preference. Then we see the product list page. By clicking on the product you want, you can access the detail page of that product.

On the detail page, we can see detailed information about the product (product code, price, discount, sizes, colors...). There is a counter logic for you to buy as many of the products as you want. There is an add to cart button, but it is not functional yet. Then, accordion menus that provide information about the product are displayed. Information about the colors and dimensions of the product on the product detail page comes from the backend.

On the login and registration page, you can fill in the information in the form and log in or register.



# Used Technologies
- HTML
- CSS
- JavaScript
- Node.js
- EJS

# Screenshots of the project
<img width="1440" alt="331716905-f3eb9681-91c2-4b40-b6fc-d698fe908832-min" src="https://github.com/fatihbayramm/madameCoco/assets/99727365/789ee89b-6b86-4d49-a4ae-11aac882b64f">
<img width="1440" alt="331716875-b6bc7985-d745-4577-b977-48d0d97c23ea-min" src="https://github.com/fatihbayramm/madameCoco/assets/99727365/364bb8ac-9887-4f44-a313-adfcf3f2ca11">
<img width="770" alt="331716773-0f0aaa56-0f28-4a22-9fc2-23fb04dc2f6a-min" src="https://github.com/fatihbayramm/madameCoco/assets/99727365/ee14214b-f814-4a27-9aa2-541e7fa20d00">
<img width="1439" alt="331716508-8e3448a3-7633-41e7-a908-00d0c2d7586b-min" src="https://github.com/fatihbayramm/madameCoco/assets/99727365/ca98d6fc-43f6-46cb-87fc-ccb6085ef9cc">
<img width="1440" alt="331716383-86e22bbd-4ae1-4799-bddd-a81589a08451-min" src="https://github.com/fatihbayramm/madameCoco/assets/99727365/85ad0a9e-5b84-4656-bf27-4c05b5d6e867">
<img width="1440" alt="331716325-2cf44c13-306b-41d5-84ab-6b9ce680ad56-min" src="https://github.com/fatihbayramm/madameCoco/assets/99727365/ecba9565-cae1-4543-9b02-4a09db26176f">
<img width="1440" alt="331716236-7ad9ea96-add2-441d-84c3-eb309bf536f4-min" src="https://github.com/fatihbayramm/madameCoco/assets/99727365/a8168b29-5c96-49af-9448-f4c0e6857a40">
















