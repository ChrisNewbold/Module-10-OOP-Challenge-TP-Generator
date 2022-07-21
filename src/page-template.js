// TODO: Create a function that returns a license badge based on which license is passed in
function generateTeam(teamData) {

  function gererateManager(managerData) {
    return `
            <>

            <article class="card" style="width: 18rem">
        <div class="card-body">
          <h4 class="card-name" ${managerData.getName()}></h4>
          <h5 class="card-title" ${managerData.getRole()}></h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" ${managerData.getID()}></li>
          <li class="list-group-item" ${managerData.getEmail()}>
            Email
            <a href="#" class="card-link">Manager</a>
          </li>
          <li class="list-group-item" ${managerData.getOfficeNumber()}></li>
        </ul>
      </article>
                ${managerData.name}
            </>
        `
  }

  function generateIntern(internData) {
    return ``
  }


  let array = []
  array.push(generateIntern())

  // join('')

}

module.exports = team => {
  return

  `
    <HTML>
        // generateTeam(teamData)

    </HTML>
    `
};
