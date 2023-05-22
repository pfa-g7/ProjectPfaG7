package emsi.pfa.pfabackend.auth;


import com.fasterxml.jackson.annotation.JsonProperty;
import emsi.pfa.pfabackend.entity.User;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    @JsonProperty("access_token")
    private String accessToken;
    @JsonProperty("refresh_token")
    private String refreshToken;
    @JsonProperty("user")
    private String user;
}
