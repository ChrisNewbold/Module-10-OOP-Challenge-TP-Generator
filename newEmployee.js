module.exports =
    // question for the adding more team members or to finish
    [
        {
            type: 'list',
            name: 'newEmployee',
            message: 'What new employee would you like to add?',
            choices: ['Add an Engineer', 'Add an Intern', 'finish building my team'],
        },
    ]