const people = ['Max', 'Nan', 'Rory', 'Jo', 'Jaden', 'Cas', 'Jared'];
const tasks = ['Upstairs Bathroom', 'Downstairs Bathroom', 'Kitchen', 'Living Room', 'Hall', 'Landing', 'Kitchen'];

let weekOffset = 0;

function assignTasks() {
    let rota = document.getElementById('rota');
    rota.innerHTML = '';

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let headerRow = document.createElement('tr');
    ['Person', 'Task'].forEach(text => {
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(text));
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    people.forEach((person, index) => {
        let row = document.createElement('tr');
        let personCell = document.createElement('td');
        personCell.appendChild(document.createTextNode(person));
        row.appendChild(personCell);

        let taskIndex = (index + weekOffset) % tasks.length;
        let task = tasks[taskIndex];

        if (task === 'Upstairs Bathroom' && !['Max', 'Nan', 'Rory'].includes(person)) {
            task = 'Downstairs Bathroom';
        } else if (task === 'Downstairs Bathroom' && !['Cas', 'Jo', 'Jared', 'Jaden'].includes(person)) {
            task = 'Upstairs Bathroom';
        }

        let taskCell = document.createElement('td');
        taskCell.appendChild(document.createTextNode(task));
        row.appendChild(taskCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    rota.appendChild(table);
}

document.getElementById('nextWeek').addEventListener('click', () => {
    weekOffset++;
    assignTasks();
});

assignTasks();
