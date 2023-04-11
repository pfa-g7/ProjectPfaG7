package emsi.pfa.pfabackend.entity;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
public class Student extends User {
    private Long numAppoge;
    private String cne;
}
