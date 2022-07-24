// TODO: Create a function that returns a license badge based on which license is passed in
function generateTeam(teamData) {
  // function to generate manager card
  function gererateManager(managerData) {
    return `
        <article class="card" style="width: 18rem">
        <div class="card-body">
          <h4 class="card-name">${managerData.getName()}</h4>
          <h5 class="card-title">${managerData.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">employee ID: ${managerData.getId()}</li>
          <li class="list-group-item">email: <a href="mailto: ${managerData.getEmail()}" target="_blank">${managerData.getEmail()}</a></li>
          <li class="list-group-item">office number: <a href="tel: ${managerData.getOfficeNumber()}" target="_blank">${managerData.getOfficeNumber()}</a></li>
        </ul>
      </article>
        `
  }
  // function to generate engineer card
  function generateEngineer(engineerData) {
    return `
    <article class="card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-name">${engineerData.getName()}</h4>
      <h5 class="card-title">${engineerData.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">employee ID: ${engineerData.getId()}</li>
      <li class="list-group-item">email: <a href="mailto: ${engineerData.getEmail()}" target="_blank">${engineerData.getEmail()}</a></li>
      <li class="list-group-item">GitHub link: <a href= "https://github.com/${engineerData.getGithub()}" target="_blank">${engineerData.getGithub()}</a></li>
    </ul>
  </article>
    `
  }
  // funtion to generate intern data
  function generateIntern(internData) {
    return `
    <article class="card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-name">${internData.getName()}</h4>
      <h5 class="card-title">${internData.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">employee ID: ${internData.getId()}</li>
      <li class="list-group-item">email: <a href="mailto: ${internData.getEmail()}" target="_blank">${internData.getEmail()}</a></li>
      <li class="list-group-item">school: ${internData.getSchool()}</li>
    </ul>
  </article>
    `
  }
  // calling the prompt data from the switch statment in index.js
  let array = []
  for (let employee of teamData) {
    switch (employee.getRole()) {
      case 'Manager': {
        array.push(gererateManager(employee))
        break
      }
      case 'Engineer': {
        array.push(generateEngineer(employee))
        break
      }
      case 'Intern': {
        array.push(generateIntern(employee))
        break
      }
    }
  }


  return array.join('')

}

module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en-US">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- browser settings -->
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <!--Bootstrap-->
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <!-- Document Links -->
      <!-- CSS file for styling -->
      <link rel="stylesheet" href="./style.css" />
      <!--Document Fonts using google fonts-->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <title>Team Profile Generator - that displays my team's basic info</title>
    </head>
    <body>
      <!--Header-->
      <header class="jumbotron jumbotron-fluid">
        <section class="container">
          <h1 class="display-4">My Team</h1>
          <p class="lead">Team information and profiles</p>
        </section>
      </header>
      <!--employee cards-->
      <section class="contact-card">
  ${generateTeam(team)}
  </section>
  <!--Bootstrap-->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
    crossorigin="anonymous"
  ></script>
</body>
</html>
`
};
