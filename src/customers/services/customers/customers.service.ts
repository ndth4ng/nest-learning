import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'ndth4ng@gmail.com',
      name: 'Thang',
    },
    {
      id: 2,
      email: 'thang1@gmail.com',
      name: 'Thang1',
    },
    {
      id: 3,
      email: 'thang2@gmail.com',
      name: 'Thang2',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
