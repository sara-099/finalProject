// Getting the submit btn 
const submitBtn = document.getElementById('submitBtn');
const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/



function newWindow() {
    // Gnerating html text
    const htmlText = `<html>
    <head>
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
        <title>Meal Plan</title>
        <link href="mealPlan.css" rel="stylesheet">
        <script src="https://rawgit.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
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
        <div>
            <button id="printMealPlanBtn">Print Meal Plan</button>
            <button id="downloadMealPlanBtn">Download Meal Plan</button>
            <button id="clearMealPlanBtn">Clear Meal Plan</button>
        </div>

        <script>
        function printMealPlan() {
            window.print();
        }

        function downloadMealPlan() {
            // Select the element containing your meal plan content
            const mealPlanElement = document.body;

            // Use html2pdf to generate a PDF
            html2pdf(mealPlanElement, {
                margin: 10,
                filename: 'meal_plan.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                onbeforestart: () => {
                    // Optionally, you can add some styling before the PDF is generated
                    mealPlanElement.style.fontSize = '12px';
                },
                onafterrender: () => {
                    // Optionally, you can revert the styling changes after the PDF is generated
                    mealPlanElement.style.fontSize = '';
                }
            });
        }

        function clearMealPlan() {
            const tds = document.querySelectorAll('tbody td:not(:first-child)')
            tds.forEach(td => {
                td.textContent = ""
            })
        }

        document.getElementById('printMealPlanBtn').addEventListener('click', printMealPlan);
        document.getElementById('downloadMealPlanBtn').addEventListener('click', downloadMealPlan);
        document.getElementById('clearMealPlanBtn').addEventListener('click', clearMealPlan);
        </script>
    </body> 
    </html>`;

    // Creating flywindow
    const flyWindow = window.open('about:blank', 'Meal Plan', 'width=600, height=400');
    flyWindow.document.write(htmlText);
}

submitBtn.addEventListener('click', function () {
    if (emailRegx.test(document.getElementById('email').value)) {
        newWindow();
    }
});