class Department {
  private employees: string[] = [];

  // public	どこからもアクセス可能
  // private 自身のクラスのみアクセス可能;

  constructor(private id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = 'Anna';
accounting.name = "NEW NAME";

accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = {name: 'DUMMY' ,describe: accounting.describe};

// accountingCopy.describe();
