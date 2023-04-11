package emsi.pfa.pfabackend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Entity
@Data
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;
    protected String username;
    protected String password;
    protected String email;
    protected String firstName;
    protected String lastName;
    protected String cin;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user-authorities",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"),
            uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "role_id"})}
    )
    protected Collection<Role> authorities;

}
