package com.gecommerce.application.customer;

import com.gecommerce.application.exception.CustomerNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository repository;
    private final CustomerMapper mapper;


    public String createCustomer(@Valid CustomerRequest request) {
        var customer = repository.save(mapper.toCustomer(request));
        return customer.getId();
    }

    public void updateCustomer(@Valid CustomerRequest request) {

        var customer = this.repository.findById(request.id())
                            .orElseThrow(() -> new CustomerNotFoundException(
                                String.format("Cannot update customer:: Customer with id %s not found", request.id())
                            ));

        mergeCustomer(customer, request);

        repository.save(customer);
    }

    private void mergeCustomer(Customer customer, @Valid CustomerRequest request) {
        if(StringUtils.isNotBlank(request.firstName())) {
            customer.setFirstName(request.firstName());
        }

        if(StringUtils.isNotBlank(request.lastName())) {
            customer.setLastName(request.lastName());
        }

        if(StringUtils.isNotBlank(request.email())) {
            customer.setEmail(request.email());
        }

        if( request.address() != null ) {
            customer.setAddress(request.address());
        }

    }

    public List<CustomerResponse> findAllCustomers() {
        return this.repository
                .findAll()
                .stream()
                .map(mapper::fromCustomer)
                .collect(Collectors.toList());
    }

    public CustomerResponse findCustomerById(String customerId) {
        return this.repository.findById(customerId)
                .map(mapper::fromCustomer)
                .orElseThrow(() ->
                        new CustomerNotFoundException(String.format("Customer with id %s not found", customerId) ));
    }

    public Boolean customerExists(String customerId) {
        return this.repository.findById(customerId).isPresent();
    }

    public void deleteCustomer(String customerId) {
        this.repository.deleteById(customerId);
    }
}
