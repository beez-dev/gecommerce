package com.gecommerce.application.product.category;

import java.util.List;
import com.gecommerce.application.product.Product;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String description;

    @OneToMany(mappedBy="category", cascade=CascadeType.REMOVE)
    private List<Product> products;
}
