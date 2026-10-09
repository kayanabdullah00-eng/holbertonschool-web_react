interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Reema',
  lastName: 'Al Nazari',
  age: 22,
  location: 'Riyadh',
};

const student2: Student = {
  firstName: 'Sara',
  lastName: 'Ahmed',
  age: 21,
  location: 'Jeddah',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = table.insertRow();

  const firstNameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
