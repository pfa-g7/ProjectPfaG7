package emsi.pfa.pfabackend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Data
@Getter
@Setter
@NoArgsConstructor
@Entity
public class SalleSurveillant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateExam;
    private String salle;
    @ManyToOne
    @JoinColumn(name = "surveillant", insertable = false, updatable = false)
    private Surveillant surveillant;
}
