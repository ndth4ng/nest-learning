import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersSerice: CustomersService) {}

  // Traditional way
  @Get(':id')
  getCustomers(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customersSerice.findCustomerById(id);

    if (customer) {
      return res.send(customer);
    } else {
      return res.status(404).send({ msg: 'Customer not found.' });
    }
  }

  // NestJS way
  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersSerice.findCustomerById(id);

    if (customer) {
      return customer;
    } else {
      throw new HttpException('Customer not found!', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('')
  getAllCustomers() {
    return this.customersSerice.getCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersSerice.createCustomer(createCustomerDto);
  }
}
