package emsi.pfa.pfabackend.entity;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
public class Surveillant extends User {
    private Long numSurveillant;
}
