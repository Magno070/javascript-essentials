const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000,
    specialization: "Web Developer",
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 28,
    department: "HR",
    salary: 45000,
    specialization: "HR Manager",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    department: "Finance",
    salary: 60000,
    specialization: "Software Engineer",
  },
  //... More employee records can be added here
];
function displayEmployees() {
  employeeDetailsHTML = employees
    .map((employee) => {
      return `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`;
    })
    .join("");
  document.getElementById("employeesDetails").innerHTML = employeeDetailsHTML;
}

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  alert("The total salaries is: " + totalSalaries);
}

function displayHREmployees() {
  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  );
  const hrEmployeesDisplay = hrEmployees.map(
    (employee) =>
      `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`
  );
  document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
  const foundEmployee = employees.find((employee) => employee.id == employeeId);
  if (foundEmployee) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
  }
}

function findEmployeeBySpecialization(employeeSpecialization) {
  const specializationEmployees = employees.filter(
    (employee) => employee.specialization === employeeSpecialization
  );
  const specializationEmployeesDisplay = specializationEmployees.map(
    (employee) =>
      `<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - ${employee.salary} - ${employee.specialization}</p>`
  );
  document.getElementById("employeesDetails").innerHTML =
    specializationEmployeesDisplay;
}
