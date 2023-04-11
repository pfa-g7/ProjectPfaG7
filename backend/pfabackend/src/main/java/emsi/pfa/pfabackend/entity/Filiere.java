package emsi.pfa.pfabackend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class Filiere {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String libelle;

    @OneToMany(mappedBy = "filiere")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Module> moduleList;
}
