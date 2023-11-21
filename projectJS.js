// Getting the submit btn 
const submitBtn = document.getElementById('submitBtn');

function newWindow() {
    const visitor = document.getElementById('name');
    // Gnerating html text
    htmlText = `<html>
    <head>
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
        <title>Meal Plan</title>
        <link href="mealPlan.css" rel="stylesheet">
    </head>
    <body>
        <table>
            <caption>Meal Plan Menu</caption>
            <thead>
                <tr> 
                <th>Meal</th> <th>Monday</th> <th>Tuesday</th> <th>Wednesday</th> <th>Thursday</th> <th>Friday</th> <th>Saturday</th> <th>Sunday</th>\
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Breakfast</td>
                    <td>${document.getElementById('breakfast-mon').value}</td>
                    <td>${document.getElementById('breakfast-tue').value}</td>
                    <td>${document.getElementById('breakfast-wed').value}</td>
                    <td>${document.getElementById('breakfast-thurs').value}</td>
                    <td>${document.getElementById('breakfast-fri').value}</td>
                    <td>${document.getElementById('breakfast-sat').value}</td>
                    <td>${document.getElementById('breakfast-sun').value}</td>
                </tr>

                <tr>
                    <td>Snack</td>
                    <td>${document.getElementById('snack-mon').value}</td>
                    <td>${document.getElementById('snack-tue').value}</td>
                    <td>${document.getElementById('snack-wed').value}</td>
                    <td>${document.getElementById('snack-thurs').value}</td>
                    <td>${document.getElementById('snack-fri').value}</td>
                    <td>${document.getElementById('snack-sat').value}</td>
                    <td>${document.getElementById('snack-sun').value}</td>
                </tr>

                <tr>
                    <td>Lunch</td>
                    <td>${document.getElementById('lunch-mon').value}</td>
                    <td>${document.getElementById('lunch-tue').value}</td>
                    <td>${document.getElementById('lunch-wed').value}</td>
                    <td>${document.getElementById('lunch-thurs').value}</td>
                    <td>${document.getElementById('lunch-fri').value}</td>
                    <td>${document.getElementById('lunch-sat').value}</td>
                    <td>${document.getElementById('lunch-sun').value}</td>
                </tr>

                <tr>
                    <td>Dinner</td>
                    <td>${document.getElementById('dinner-mon').value}</td>
                    <td>${document.getElementById('dinner-tue').value}</td>
                    <td>${document.getElementById('dinner-wed').value}</td>
                    <td>${document.getElementById('dinner-thurs').value}</td>
                    <td>${document.getElementById('dinner-fri').value}</td>
                    <td>${document.getElementById('dinner-sat').value}</td>
                    <td>${document.getElementById('dinner-sun').value}</td>
                </tr>
            </tbody>
        </table>
    </body> 
    </html>`;

    // Creating flywindow
    const flyWindow = window.open('about:blank', 'Meal Plan', 'width=600, height=400');
    flyWindow.document.write(htmlText);
}


submitBtn.addEventListener('click', newWindow);